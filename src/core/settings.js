import { useMemo, useState } from 'react';
import { DarkMode } from './context';

const InitTheme = () => {
    if (localStorage['dark-mode-enabled'] === undefined)
    localStorage['dark-mode-enabled'] = false;
  const [darkMode, setDarkMode] = useState(localStorage['dark-mode-enabled'] === 'true');
  const value = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);
  DarkMode.inverted = value.darkMode;

  return value;
}

export { InitTheme }