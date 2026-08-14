import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, onThemeToggle, isMenuOpen, onMenuToggle, onLinkClick }) {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#home" onClick={onLinkClick}>
          Portfolio
        </a>

        <button
          type="button"
          className="navbar__menu-button"
          onClick={onMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <span aria-hidden="true">☰</span>
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={onLinkClick}>
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  );
}
