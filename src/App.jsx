import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

const STORAGE_KEY = 'portfolio-theme';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((currentOpen) => !currentOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <Navbar
        theme={theme}
        onThemeToggle={handleThemeToggle}
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
        onLinkClick={handleLinkClick}
      />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
