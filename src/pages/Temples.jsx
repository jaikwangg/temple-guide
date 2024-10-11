import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Temples = () => {
  const { t, language } = useLanguage();

  const floorInfo = [
    { name: language === 'en' ? '1st Floor' : 'ชั้นที่ 1', description: language === 'en' ? 'Base of the temple' : 'ฐานของวัด' },
    { name: language === 'en' ? '2nd Floor' : 'ชั้นที่ 2', description: language === 'en' ? 'Hall of Buddhist teachings' : 'ห้องแสดงหลักธรรมคำสอน' },
    { name: language === 'en' ? '3rd Floor' : 'ชั้นที่ 3', description: language === 'en' ? 'Meditation area' : 'พื้นที่สำหรับนั่งสมาธิ' },
    { name: language === 'en' ? '4th Floor' : 'ชั้นที่ 4', description: language === 'en' ? 'Buddha relics' : 'ที่ประดิษฐานพระบรมสารีริกธาตุ' },
    { name: language === 'en' ? '5th Floor' : 'ชั้นที่ 5', description: language === 'en' ? 'Historical artifacts' : 'ห้องจัดแสดงโบราณวัตถุ' },
    { name: language === 'en' ? '6th Floor' : 'ชั้นที่ 6', description: language === 'en' ? 'Observation deck' : 'จุดชมวิว' },
    { name: language === 'en' ? '7th Floor' : 'ชั้นที่ 7', description: language === 'en' ? 'Buddhist library' : 'ห้องสมุดพุทธศาสนา' },
    { name: language === 'en' ? '8th Floor' : 'ชั้นที่ 8', description: language === 'en' ? 'Prayer hall' : 'ห้องสวดมนต์' },
    { name: language === 'en' ? '9th Floor' : 'ชั้นที่ 9', description: language === 'en' ? 'Top shrine' : 'ห้องบูชาสูงสุด' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('templesInKhonKaen')}</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('watNongWaeng')}</h2>
        <p className="mb-4">{t('templeDescription')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {floorInfo.map((floor, index) => (
            <Link 
              key={index} 
              to={`/temple-floor/${index + 1}`} 
              className="bg-cream dark:bg-gray-700 p-4 rounded-lg shadow hover:bg-sage dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{floor.name}</h3>
              <p>{floor.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temples;