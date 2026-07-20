import { useState } from "react";
import Reveal from "./Reveal";
import { postContact } from "../api";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", text: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", text: "" });
    try {
      const res = await postContact(form);
      setStatus({ state: "success", text: res.message || "Message sent!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ state: "error", text: err.message });
    }
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-28 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Let's Talk</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Let's Work
            <br />
            Together
          </h2>
          <p className="text-muted max-w-sm mb-10">
            Have a backend, integration, or full-stack build in mind? Send a message — I'll get back to you.
          </p>

          <div className="space-y-4">
            <a
              href={profile.socials.email}
              className="flex items-center gap-4 border border-white/10 bg-panel rounded-xl px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent">
                @
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-white/10 bg-panel rounded-xl px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent">
                in
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted">LinkedIn</p>
                <p className="font-medium">Rallion Antonio Cipriano</p>
              </div>
            </a>
            <div className="flex items-center gap-4 border border-white/10 bg-panel rounded-xl px-5 py-4">
              <span className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent">
                ⚑
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted">Location</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>
            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="flex items-center gap-4 border border-white/10 bg-panel rounded-xl px-5 py-4 hover:border-accent/50 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent">
                  ↓
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted">Resume</p>
                  <p className="font-medium">Download PDF</p>
                </div>
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="bg-panel border border-white/10 rounded-2xl p-7 md:p-8 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted mb-2 block">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted mb-2 block">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted mb-2 block">Message</label>
              <textarea
                required
                rows="5"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status.state === "loading"}
              className="w-full bg-accent text-white font-semibold uppercase tracking-widest text-sm rounded-lg py-3.5 hover:bg-white hover:text-ink transition-colors disabled:opacity-60"
            >
              {status.state === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status.state === "success" && <p className="text-sm text-accent">{status.text}</p>}
            {status.state === "error" && <p className="text-sm text-red-400">{status.text}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
