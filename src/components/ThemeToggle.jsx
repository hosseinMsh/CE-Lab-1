export default function ThemeToggle({ theme, onToggle }) {
  const nextLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={nextLabel}
      title={nextLabel}
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      <span className="theme-toggle__text">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
