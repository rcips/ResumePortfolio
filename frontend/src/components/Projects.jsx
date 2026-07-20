import Reveal from "./Reveal";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="px-6 md:px-10 py-28 max-w-7xl mx-auto">
      <Reveal className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl uppercase">Featured Projects</h2>
        </div>
        <a
          href={projects[0]?.code || "#"}
          target="_blank"
          rel="noreferrer"
          className="text-sm uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors flex items-center gap-2"
        >
          View GitHub <span aria-hidden>→</span>
        </a>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal
            key={p.id}
            delay={i * 80}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-panel ${
              p.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative h-72 md:h-80 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <span className="absolute top-6 left-6 font-display text-accent/70 text-4xl">{p.number}</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">{p.category}</p>
                <h3 className="font-display text-2xl md:text-3xl uppercase">{p.title}</h3>
                <p className="text-muted text-sm mt-2 max-w-md hidden md:block">{p.description}</p>
              </div>
              <div className="flex gap-3 shrink-0">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-colors"
                    aria-label={`${p.title} demo`}
                  >
                    ↗
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-colors"
                    aria-label={`${p.title} code`}
                  >
                    {"</>"}
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
