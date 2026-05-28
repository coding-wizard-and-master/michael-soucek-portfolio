import React, { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const TopNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="text-sm font-semibold tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
          MS
        </a>

        {/* Desktop nav links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:michaelsoucek73@gmail.com"
          className="hidden md:inline-block text-sm font-semibold text-blue-600 border border-blue-200 hover:border-blue-600 px-4 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Let's Connect
        </a>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="md:hidden p-2 rounded text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-sm">
          <ul className="px-6 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-3 text-sm font-medium text-slate-600 hover:text-slate-900 border-b border-slate-50 last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="mailto:michaelsoucek73@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center text-sm font-semibold text-blue-600"
              >
                Let's Connect
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default TopNav;
