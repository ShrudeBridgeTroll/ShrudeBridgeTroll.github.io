import { useEffect, useRef } from 'react';

export default function ThemeToggle({ theme, onToggle }) {
  // useRef stores a reference to this real DOM button; it does not cause re-renders.
  const buttonRef = useRef(null);
  const hasToggledRef = useRef(false);

  // Focus the button AFTER React has committed the updated theme.
  // The guard avoids stealing focus on the initial page load.
  useEffect(() => {
    if (hasToggledRef.current) {
      buttonRef.current?.focus();
      hasToggledRef.current = false;
    }
  }, [theme]);

  function handleToggle() {
    hasToggledRef.current = true;
    onToggle();
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
      <span className="toggle-label">{theme === 'light' ? 'Go dark' : 'Go light'}</span>
    </button>
  );
}
