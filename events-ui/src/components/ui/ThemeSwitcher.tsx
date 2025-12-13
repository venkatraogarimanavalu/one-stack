import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
// import { ThemeContext } from '../contexts/ThemeContext';

type ThemeType = "light" | "dark" | "ocean" | "forest" | "system";

const ThemeSwitcher: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeSwitcher must be used within ThemeProvider');
  }

  const { theme, setCurrentTheme } = context;

  const themes: { label: string; value: ThemeType }[] = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Ocean", value: "ocean" },
    { label: "Forest", value: "forest" },
    { label: "System", value: "system" },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setCurrentTheme(t.value)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            theme === t.value
              ? "bg-[var(--primary-color)] text-white shadow-lg"
              : "bg-[var(--surface-color)] text-[var(--text-color)] border border-[var(--border-color)] hover:border-[var(--primary-color)]"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
