import Reveal from "./Reveal";

export default function Experience({ experience, profile }) {
  return (
    <div>
      <Reveal className="mb-10">
        <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Career Path</p>
        <h2 className="font-display text-3xl md:text-4xl uppercase">Work Experience</h2>
      </Reveal>

      <div className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 90} className="relative mb-9 last:mb-0">
            <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-ink border-2 border-accent shadow-[0_0_10px_theme(colors.accent)]" />
            <div className="bg-panel border border-white/10 rounded-xl p-5 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-accent/70 text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {job.current && (
                  <span className="text-[10px] uppercase tracking-widest bg-accent/15 text-accent border border-accent/40 rounded-full px-2 py-0.5">
                    Current
                  </span>
                )}
              </div>
              <p className="font-semibold text-lg leading-tight">{job.role}</p>
              <p className="text-accent text-sm mb-1">{job.company}</p>
              <p className="text-xs text-muted mb-3">
                {job.start} – {job.end}
              </p>
              <ul className="space-y-1">
                {job.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted leading-relaxed flex gap-2">
                    <span className="text-accent shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 border-l-2 border-accent/50 pl-5">
        <p className="font-display text-xl leading-snug text-white/90">
          "Clean code isn't written faster, it's written once."
        </p>
        <p className="text-sm text-muted mt-2">— {profile.name}</p>
      </Reveal>
    </div>
  );
}
