import Reveal from "./Reveal";

export default function Skills({ skills, education }) {
  return (
    <div>
      <Reveal className="mb-10">
        <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Background</p>
        <h2 className="font-display text-3xl md:text-4xl uppercase">Education &amp; Skills</h2>
      </Reveal>

      <Reveal className="mb-10">
        <p className="text-accent text-xs uppercase tracking-[0.2em] mb-3">Education</p>
        {education.map((e) => (
          <div key={e.id} className="border-l-2 border-accent/50 pl-4">
            <p className="font-semibold">{e.school}</p>
            <p className="text-sm text-muted">{e.degree}</p>
            <p className="text-xs text-muted mt-1">
              {e.start} – {e.end}
            </p>
          </div>
        ))}
      </Reveal>

      <div className="space-y-7">
        {skills.map((group, i) => (
          <Reveal key={group.id} delay={i * 60}>
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-3">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-panel text-muted hover:text-white hover:border-accent/60 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
