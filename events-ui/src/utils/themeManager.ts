type ThemeType = "light" | "dark" | "ocean" | "forest" | "system";

/**
 * Set the theme on the DOM
 * Note: localStorage is handled by useLocalStorage hook
 */
export const applyTheme = (theme: ThemeType): void => {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
};

/**
 * Get current theme from DOM
 */
export const getThemeFromDOM = (): ThemeType => {
  const htmlTheme = document.documentElement.getAttribute("data-theme") as ThemeType | null;
  return htmlTheme || "system";
};

/**
 * Get system preference (light or dark)
 */
export const getSystemTheme = (): "light" | "dark" => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

/**
 * Listen for system theme changes
 */
export const subscribeToSystemTheme = (callback: (theme: "light" | "dark") => void): (() => void) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
  const handleChange = (e: MediaQueryListEvent) => {
    callback(e.matches ? "dark" : "light");
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
};
