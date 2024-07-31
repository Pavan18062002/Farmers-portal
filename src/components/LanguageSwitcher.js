import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('hi')}>Hindi</button>
      <button onClick={() => handleLanguageChange('te')}>Telugu</button>
      <button onClick={() => handleLanguageChange('ta')}>Tamil</button>
    </div>
  );
};

export default LanguageSwitcher;
