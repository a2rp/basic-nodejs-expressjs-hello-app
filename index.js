const express = require("express");
const app = express();

const PORT = process.env.port || 1198;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}: http://localhost:${PORT}`);
});
