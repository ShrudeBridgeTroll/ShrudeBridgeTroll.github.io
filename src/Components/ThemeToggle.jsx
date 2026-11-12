
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext.jsx'

export default function ThemeToggle() {
  // Assignment 6: Get theme state directly from Context.
  const { theme, setTheme } = useContext(ThemeContext);

  // Preserve the original button focus behavior.
  const buttonRef = useRef(null);
  const hasToggledRef = useRef(false);

  useEffect(() => {
    if (hasToggledRef.current) {
      buttonRef.current?.focus();
      hasToggledRef.current = false;
    }
  }, [theme]);

  function handleToggle() {
    hasToggledRef.current = true;

    setTheme(current =>
      current === 'light' ? 'dark' : 'light'
    );
  }

  const nextMode = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      ref={buttonRef}
      type="button"
      className="firefly-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${nextMode} mode`}
      title={`Switch to ${nextMode} mode`}
      aria-pressed={theme === 'dark'}
    >
      <span className="toggle-art" aria-hidden="true">
        <span className="bug-wing bug-wing-left" />
        <span className="bug-wing bug-wing-right" />
        <span className="bug-head" />
        <span className="bug-body" />
        <span className="bug-light" />
        <span className="bug-antenna antenna-left" />
        <span className="bug-antenna antenna-right" />
      </span>

      <span className="toggle-label">
        {theme === 'light' ? 'Go dark' : 'Go light'}
      </span>
    </button>
  );
}
