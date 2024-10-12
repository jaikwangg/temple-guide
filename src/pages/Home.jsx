import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import backgroundImage from '../asset/background.jpg';  

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 drop-shadow-lg">
          {t('welcome')}
        </h1>
        <p className="text-xl text-white text-center mb-12 drop-shadow-lg">
          {t('exploreTemples')}
        </p>
        <div className="flex justify-center">
          <Link
            to="/temples"
            className="bg-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-sage transition duration-300 shadow-lg"
          >
            {t('temples')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
