import { createContext, useEffect, useState } from "react";
import { DEFAULT_THEME_VALUE } from "../constants";
import { useLocalStorage } from "../hooks";

type PropsThemeContext = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

export const ThemeContext =
  createContext<PropsThemeContext>(DEFAULT_THEME_VALUE);

export const ThemeContextProvider = (props: any) => {
  const [theme, setTheme] = useState(DEFAULT_THEME_VALUE.theme);
  const [session_theme, setSessionTheme] = useLocalStorage<"dark" | "light">(
    "theme",
    DEFAULT_THEME_VALUE.theme
  );

  useEffect(() => {
    if (session_theme) {
      setTheme((prev) => (prev = session_theme));
    }
  }, []);

  useEffect(() => {
    setSessionTheme(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
