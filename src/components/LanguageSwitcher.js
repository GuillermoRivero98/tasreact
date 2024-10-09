import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => setLanguage(language === "es" ? "en" : "es")}>
        Cambiar a {language === "es" ? "Inglés" : "Español"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
