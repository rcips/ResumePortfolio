import { profile } from "./_lib/content.js";

export default function handler(req, res) {
  res.status(200).json(profile);
}
