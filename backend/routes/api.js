const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const dataPath = (file) => path.join(__dirname, "..", "data", file);
const readJSON = (file) => JSON.parse(fs.readFileSync(dataPath(file), "utf-8"));

router.get("/profile", (req, res) => res.json(readJSON("profile.json")));
router.get("/experience", (req, res) => res.json(readJSON("experience.json")));
router.get("/skills", (req, res) => res.json(readJSON("skills.json")));
router.get("/education", (req, res) => res.json(readJSON("education.json")));
router.get("/projects", (req, res) => res.json(readJSON("projects.json")));

router.get("/all", (req, res) => {
  res.json({
    profile: readJSON("profile.json"),
    experience: readJSON("experience.json"),
    skills: readJSON("skills.json"),
    education: readJSON("education.json"),
    projects: readJSON("projects.json"),
  });
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "name, email and message are required." });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email address." });
  }

  const messagesFile = dataPath("messages.json");
  const messages = readJSON("messages.json");
  messages.push({
    id: Date.now(),
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString(),
  });
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));

  res.status(201).json({ ok: true, message: "Message received. Thanks for reaching out!" });
});

module.exports = router;
