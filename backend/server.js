require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const apiRouter = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());
app.use("/api", apiRouter);

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "rallion-portfolio-backend", time: new Date().toISOString() });
});

const clientBuildPath = path.join(__dirname, "..", "frontend", "dist");
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get("*", (req, res) => res.sendFile(path.join(clientBuildPath, "index.html")));
}

app.listen(PORT, () => {
  console.log(`Rallion portfolio API running on http://localhost:${PORT}`);
});
