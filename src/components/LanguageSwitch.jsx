import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
    // Here you would typically update your i18n context or state management
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 p-2 rounded-full hover:bg-sage"
    >
      <Globe size={24} />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitch;