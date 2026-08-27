import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}Clifford_Harvey_Resume.pdf`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-mark" aria-label="Home">
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="9" cy="10" r="2.4" fill="var(--amber)" />
            <circle cx="23" cy="9" r="2.2" fill="var(--slate)" />
            <circle cx="16" cy="22" r="2.6" fill="var(--amber)" />
            <circle cx="26" cy="21" r="2" fill="var(--slate)" />
            <path
              d="M9 10 L16 22 M16 22 L23 9 M16 22 L26 21"
              stroke="var(--slate)"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
          <span>Clifford Harvey</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={resumeUrl} className="btn btn-ghost nav-resume" download>
          Résumé
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={resumeUrl} download onClick={() => setOpen(false)}>
            Résumé
          </a>
        </div>
      )}
    </header>
  );
}
