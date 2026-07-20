import { experience } from "./_lib/content.js";

export default function handler(req, res) {
  res.status(200).json(experience);
}
