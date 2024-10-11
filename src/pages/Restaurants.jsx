import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Restaurants = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('nearbyRestaurants')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">{t('restaurantName')}</h2>
          <p className="mb-4">{t('restaurantDescription')}</p>
          <button className="bg-gold text-white px-4 py-2 rounded hover:bg-sage transition duration-300">
            {t('viewDetails')}
          </button>
        </div>
        {/* Add more restaurant cards as needed */}
      </div>
    </div>
  );
};

export default Restaurants;