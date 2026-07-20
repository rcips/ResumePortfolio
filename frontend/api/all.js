import { profile, experience, skills, education, projects } from "./_lib/content.js";

export default function handler(req, res) {
  res.status(200).json({ profile, experience, skills, education, projects });
}
