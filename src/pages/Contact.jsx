import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('contactUs')}</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">{t('watNongWaeng')}</h2>
        <p className="mb-2">{t('address')}: [Insert temple address]</p>
        <p className="mb-2">{t('phone')}: [Insert contact number]</p>
        <p className="mb-2">{t('email')}: [Insert email address]</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">{t('openingHours')}</h3>
        <p className="mb-2">{t('mondayToSunday')}: [Insert opening hours]</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">{t('transportation')}</h3>
        <p className="mb-2">{t('transportationInfo')}</p>
      </div>
    </div>
  );
};

export default Contact;