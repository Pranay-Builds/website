import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
