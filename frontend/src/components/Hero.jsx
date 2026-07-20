import Reveal from "./Reveal";

export default function Hero({ profile }) {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden noise-grid">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="giant-text text-[22vw] whitespace-nowrap">DEVELOPER</span>
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24 pt-40">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div>
            <Reveal as="p" className="text-accent font-display tracking-widest text-sm mb-4">
              Hello, I'm
            </Reveal>
            <Reveal as="h1" className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] uppercase">
              {firstName}
              <br />
              {lastName}
            </Reveal>
            <Reveal delay={100} as="p" className="mt-5 text-accent uppercase tracking-[0.25em] text-sm font-semibold">
              {profile.title}
            </Reveal>
            <Reveal delay={150} as="p" className="mt-4 max-w-md text-muted leading-relaxed">
              {profile.tagline} — {profile.summary.split(". ")[0]}.
            </Reveal>
            <Reveal delay={200} className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
              <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
              {profile.location}
            </Reveal>
            <Reveal delay={230} className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-accent text-white font-semibold text-sm uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-ink transition-colors"
              >
                View Work
              </a>
              {profile.resume && (
                <a
                  href={profile.resume}
                  download
                  className="rounded-full border border-white/25 text-sm uppercase tracking-widest px-6 py-3 hover:border-accent hover:text-accent transition-colors"
                >
                  Download Resume
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={250} className="flex md:justify-end">
            <div className="grid grid-cols-3 md:flex md:flex-col gap-6 md:gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-6 md:w-56">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-accent">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
