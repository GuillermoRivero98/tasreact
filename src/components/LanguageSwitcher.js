import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button onClick={toggleLanguage}>
      Switch to {language === 'en' ? 'Spanish' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;