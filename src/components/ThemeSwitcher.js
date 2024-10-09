import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";  

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
