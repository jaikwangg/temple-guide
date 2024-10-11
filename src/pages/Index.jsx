import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gold dark:text-cream mb-8">
              {t('welcome')}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
              {t('exploreTemples')}
            </p>
            <Link
              to="/temples"
              className="bg-gold text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-sage transition duration-300"
            >
              {t('temples')}
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/wat-nong-waeng.jpg"
              alt="Wat Nong Waeng"
              className="w-full h-auto rounded-lg shadow-lg mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;