export default function Footer({ profile }) {
  return (
    <footer className="border-t border-white/10 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Node.js.
      </p>
      <div className="flex gap-6">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
          GitHub
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
          LinkedIn
        </a>
        <a href={profile.socials.email} className="hover:text-accent transition-colors">
          Email
        </a>
      </div>
    </footer>
  );
}
