# Rallion Cipriano — Portfolio (React + Node.js, deployable on Vercel)

A full-stack portfolio: a Vite/React/Tailwind frontend, plus a Node.js
backend that serves your profile, experience, skills and project data as a
JSON API. Content is sourced from your resume.

## Structure

```
rallion-portfolio/
├── backend/                Optional standalone Express server — handy for
│   ├── data/                local development without the Vercel CLI.
│   ├── routes/api.js        NOT used in the Vercel deployment (see below).
│   └── server.js
└── frontend/                This is what actually deploys to Vercel.
    ├── api/                  Vercel serverless functions (Node) — same data,
    │   ├── _lib/content.js    reshaped for Vercel's "/api" convention.
    │   ├── profile.js, experience.js, skills.js, education.js, projects.js
    │   ├── all.js
    │   └── contact.js         validates + forwards messages to Getform
    ├── public/assets/        your real project screenshots, photo, resume
    └── src/
        ├── components/       Navbar, Hero, Projects, Skills, Experience, Contact, Footer
        ├── data/fallback.js  local copy of the same content (safety net)
        └── hooks/usePortfolioData.js
```

## Deploying to Vercel (single project, frontend + API together)

1. **Push to GitHub.** Create a repo (or reuse an existing one) and push the
   whole `rallion-portfolio` folder to it.

2. **Import into Vercel.** Go to vercel.com → **Add New → Project** → import
   that GitHub repo.

3. **Set the Root Directory to `frontend`.** This is the important part —
   in the import screen (or Project Settings → General → Root Directory),
   set it to `frontend`. Vercel then treats `frontend/` as the project root:
   - It builds the Vite app (`npm run build` → `dist`) as the static site.
   - It automatically turns every file in `frontend/api/` into a serverless
     function at `/api/...` — no extra config needed.

4. **Framework Preset:** Vite (auto-detected). **Build Command:**
   `npm run build` (auto). **Output Directory:** `dist` (auto).

5. **Deploy.** Vercel gives you a URL like `rallion-cipriano.vercel.app`.
   Your site and its API live on the same domain, so the frontend calls
   `/api/profile`, `/api/projects`, etc. with no CORS setup and no
   environment variables required.

6. **Test it:** open `https://your-project.vercel.app/api/profile` directly
   in a browser — you should see your profile JSON. Then check the contact
   form on the live site; submissions are forwarded to the Getform endpoint
   your original site used, so they land in the same inbox/dashboard.

Every future push to your GitHub repo's main branch auto-redeploys.

## Local development

**Option A — `vercel dev` (matches production exactly, recommended)**
```
cd frontend
npm install
npm i -g vercel      # if you don't have the CLI yet
vercel dev
```
This runs the Vite app and the `/api` functions together on one local port,
exactly like the real deployment.

**Option B — classic two-terminal setup with the Express backend**
```
# Terminal 1
cd backend && npm install && cp .env.example .env && npm run dev   # :4000

# Terminal 2
cd frontend && npm install
echo "VITE_API_URL=http://localhost:4000/api" > .env
npm run dev   # :5173
```

## Editing your content

There are three places holding the same data — keep them in sync when you
update your info:
- `frontend/api/_lib/content.js` — used by the live Vercel deployment.
- `backend/data/*.json` — used by the optional local Express server.
- `frontend/src/data/fallback.js` — local safety net if the API is down.

## Contact form delivery

`frontend/api/contact.js` validates the submission and forwards it to
Getform (the same service your original site used), so it works on Vercel
out of the box with no secrets to configure. The optional Express backend
instead saves messages to `backend/data/messages.json` for local testing.
To switch to a different provider (Resend, SendGrid, nodemailer + SMTP),
edit `frontend/api/contact.js` and add any API keys under Vercel → Project
Settings → Environment Variables.

## Notes

- Accenture (Custom Software Engineering Senior Analyst, Sept 2024 – Dec
  2025) is included in the experience data, along with CXFabric, Entrego
  and Pacific Sea BPO, matching your resume. Your resume also lists CXFabric
  as "Dec 2023–Present" overlapping with the Accenture dates — kept as-is;
  let me know if either needs adjusting.
- Your photo, project screenshots, and resume PDF are real files pulled
  from your existing React-Portfolio repo, now local in `frontend/public/`.
