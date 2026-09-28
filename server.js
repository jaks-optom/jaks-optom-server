const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "JAKS OPTOM server is running",
        version: "1.0.0"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "online",
        service: "JAKS OPTOM API"
    });
});

app.listen(PORT, () => {
    console.log("JAKS OPTOM server running on port " + PORT);
});
