import React, { createContext, useEffect, useState, type ReactNode } from 'react';
import { type ThemeContextType, type ThemeType } from '../types';
import { applyTheme, getThemeFromDOM } from '../utils/themeManager';
import LocalStorageManager from '../utils/localStorage';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'app_theme';

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = LocalStorageManager.getItem<ThemeType>(THEME_STORAGE_KEY);
    return saved || getThemeFromDOM();
  });

  // Apply theme to DOM when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setCurrentTheme = (newTheme: ThemeType) => {
    LocalStorageManager.setItem(THEME_STORAGE_KEY, newTheme);
    setTheme(newTheme);
  };

  // Listen for storage changes from other tabs
  // useEffect(() => {
  //   const unsubscribe = LocalStorageManager.subscribe(THEME_STORAGE_KEY, (value) => {
  //     if (typeof value === 'string') {
  //       setTheme(value as ThemeType);
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <ThemeContext.Provider value={{ theme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

