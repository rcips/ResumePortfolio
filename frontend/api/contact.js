// POST /api/contact — validates the message, then forwards it to Getform
// (the same form-delivery service the original site used) so messages
// actually land in your inbox. Vercel serverless functions have a
// read-only, ephemeral filesystem, so we can't persist to a local JSON
// file here the way the optional Express backend (backend/) does.
//
// To switch providers later (Resend, SendGrid, nodemailer + SMTP, etc.),
// replace the fetch() call below with that provider's API and add any
// required secrets in Vercel's Project Settings → Environment Variables.

const GETFORM_ENDPOINT = "https://getform.io/f/67e7640b-5272-405c-ab4a-3dedbeda7dbf";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "name, email and message are required." });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email address." });
  }

  try {
    const formRes = await fetch(GETFORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        message: String(message).slice(0, 5000),
      }),
    });

    if (!formRes.ok) throw new Error(`Delivery service responded with ${formRes.status}`);

    return res.status(201).json({ ok: true, message: "Message received. Thanks for reaching out!" });
  } catch (err) {
    console.error("[api/contact]", err);
    return res.status(502).json({
      ok: false,
      error: "Could not send your message right now — please try again or email directly.",
    });
  }
}
