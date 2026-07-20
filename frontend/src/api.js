// Defaults to a relative "/api" path, which is correct both on Vercel
// (where frontend/api/*.js are colocated serverless functions on the same
// domain) and when running `vercel dev` locally. Set VITE_API_URL if you'd
// rather point at the separate Express server in backend/ during local dev.
const BASE_URL = import.meta.env.VITE_API_URL || "/api";

/**
 * Fetches JSON from the backend API. If the request fails (e.g. the backend
 * isn't running), it falls back to the provided local data so the site never
 * breaks — this is what you want during static hosting or if the API is down.
 */
export async function getJSON(path, fallback) {
  try {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) throw new Error(`Request to ${path} failed with ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`[api] Falling back to local data for ${path}:`, err.message);
    return fallback;
  }
}

export async function postContact({ name, email, message }) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "Something went wrong sending your message.");
  }
  return data;
}
