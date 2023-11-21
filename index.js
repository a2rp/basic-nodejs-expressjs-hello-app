const express = require("express");
const app = express();

app.get("/api/v1/a2rp", (req, res) => {
    res.json({
        success: true,
        message: "a2rp: an Ashish Ranjan presentation"
    });
});

const PORT = process.env.port || 1198;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}: http://localhost:${PORT}`);
});
