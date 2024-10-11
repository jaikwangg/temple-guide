import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/path/to/background-image.jpg')"}}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
          {t('welcome')}
        </h1>
        <p className="text-xl text-white text-center mb-12">
          {t('exploreTemples')}
        </p>
        <div className="flex justify-center">
          <Link
            to="/temples"
            className="bg-gold text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-sage transition duration-300"
          >
            {t('temples')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;