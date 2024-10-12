import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Temples = () => {
  const { t, language } = useLanguage();

  const floorInfo = [
    { name: language === 'en' ? '1st Floor' : 'ชั้นที่ 1', description: language === 'en' ? 'Relic hall with Buddha’s relics and murals about Khon Kaen’s history.' : 'บุษบกประดิษฐานพระบรมสารีริกธาตุและจิตรกรรมฝาผนังเกี่ยวกับขอนแก่น' },
    { name: language === 'en' ? '2nd Floor' : 'ชั้นที่ 2', description: language === 'en' ? 'Local museum with tools, scriptures, and murals of Isan taboos.' : 'พิพิธภัณฑ์ท้องถิ่น เก็บเครื่องมือ คัมภีร์ และภาพจิตรกรรมข้อห้ามชาวอีสาน' },
    { name: language === 'en' ? '3rd Floor' : 'ชั้นที่ 3', description: language === 'en' ? 'Religious items and murals of Vessantara Jataka.' : 'ตู้เก็บของพระสงฆ์และจิตรกรรมพระเวสสันดร' },
    { name: language === 'en' ? '4th Floor' : 'ชั้นที่ 4', description: language === 'en' ? 'Museum with artifacts and murals of Buddha’s life and Luang Pu Koon.' : 'พิพิธภัณฑ์โบราณวัตถุและจิตรกรรมพุทธประวัติและหลวงปู่คูณ' },
    { name: language === 'en' ? '5th Floor' : 'ชั้นที่ 5', description: language === 'en' ? 'Historical artifacts and Isan proverbs murals.' : 'โบราณวัตถุและจิตรกรรมสุภาษิตอีสาน' },
    { name: language === 'en' ? '6th Floor' : 'ชั้นที่ 6', description: language === 'en' ? 'Observation deck with city views.' : 'จุดชมวิวเมือง' },
    { name: language === 'en' ? '7th Floor' : 'ชั้นที่ 7', description: language === 'en' ? 'Library with carvings from Vessantara Jataka.' : 'ห้องสมุดพระอรหันต์และจิตรกรรมทศชาติชาดก' },
    { name: language === 'en' ? '8th Floor' : 'ชั้นที่ 8', description: language === 'en' ? 'Holds important Buddhist scriptures.' : 'รวบรวมคัมภีร์พระธรรมสำคัญ' },
    { name: language === 'en' ? '9th Floor' : 'ชั้นที่ 9', description: language === 'en' ? 'Shrine with Buddha’s relics and panoramic view.' : 'บุษบกบรรจุพระบรมสารีริกธาตุและทิวทัศน์เมือง' },
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