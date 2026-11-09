// Load Express to create the HTTP API server.
const express = require("express");
// Load values from a local .env file when it is available.
const dotenv = require("dotenv");

dotenv.config();

// Create the Express application instance.
const app = express();
// Use PORT from .env or the system environment. Fall back to the project standard port.
const portValue = process.env.PORT;
const PORT = portValue === undefined ? 1198 : Number(portValue);

// Do not reveal the Express framework through the X-Powered-By response header.
app.disable("x-powered-by");

// Add the requested API path as the first field in every JSON response.
app.use((req, res, next) => {
    // Keep Express's original JSON response method so it can be called after adding apiUrl.
    const originalJson = res.json.bind(res);

    res.json = (payload) => {
        const apiUrl = req.path;

        if (payload && typeof payload === "object" && !Array.isArray(payload)) {
            // Ignore any apiUrl supplied by a handler and always use the actual request path.
            const { apiUrl: ignoredApiUrl, ...body } = payload;
            return originalJson({ apiUrl, ...body });
        }

        // Keep the response format predictable even if a route sends a primitive value.
        return originalJson({ apiUrl, data: payload });
    };

    next();
});

// Parse JSON request bodies and reject unusually large payloads.
app.use(express.json({ limit: "50kb" }));

// Log the HTTP method, requested path, and final status after each response finishes.
app.use((req, res, next) => {
    res.on("finish", () => {
        console.log(`[API] ${req.method} ${req.path} -> ${res.statusCode}`);
    });

    next();
});

// Home route: confirms that the API service is available.
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Basic Node.js Express API is running",
    });
});

// Health route: useful for checking whether the server can receive requests.
app.get("/health", (req, res) => {
    return res.status(200).json({
        status: "ok",
        service: "basic-nodejs-expressjs-hello-app",
    });
});

// Existing public API route for the a2rp response.
app.get("/api/v1/a2rp", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "a2rp: an Ashish Ranjan presentation",
    });
});

// Fallback route: runs only when no route above matches the requested path.
app.use((req, res) => {
    return res.status(404).json({ message: "Route not found" });
});

// Error handler: receives errors from earlier middleware, including malformed JSON bodies.
app.use((error, req, res, next) => {
    // Do not try to send a second response after a route has already sent one.
    if (res.headersSent) {
        return next(error);
    }

    console.error(`[API] ${req.method} ${req.path} error:`, error.message);

    if (error.type === "entity.too.large") {
        return res.status(413).json({ message: "Request body is too large" });
    }

    // Express uses this error type when a request body contains invalid JSON.
    if (error.type === "entity.parse.failed") {
        return res.status(400).json({ message: "Malformed JSON request body" });
    }

    return res.status(500).json({ message: "Internal server error" });
});

// Start listening only after all middleware and routes have been registered.
if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
    console.error("Server startup failed: PORT must be an integer from 1 to 65535");
    process.exitCode = 1;
} else {
    app.listen(PORT, () => {
        console.log(`[API] Server running on port ${PORT}`);
    });
}
