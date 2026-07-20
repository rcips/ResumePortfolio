import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-colors duration-300 ${
          scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <button onClick={() => go("home")} className="font-display text-xl tracking-wide">
          RC<span className="text-accent">.</span>
        </button>

        <ul className="hidden md:flex gap-10">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="text-xs uppercase tracking-[0.2em] text-muted hover:text-white transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-accent/60 px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-colors"
        >
          Hire Me
        </button>

        <button className="md:hidden flex flex-col gap-1.5 z-50" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {LINKS.map((l) => (
          <button key={l.id} onClick={() => go(l.id)} className="font-display text-3xl uppercase">
            {l.label}
          </button>
        ))}
      </div>
    </>
  );
}
