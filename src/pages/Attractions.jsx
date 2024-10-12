import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Attractions = () => {
  const { t, language } = useLanguage();

  const attractions = [
    { 
        name: language === 'en' ? 'Fairy Plaza' : 'ห้างสรรพสินค้า แฟรี่พลาซ่า', 
        description: language === 'en' ? 'A shopping mall in Khon Kaen' : 'ห้างสรรพสินค้าในขอนแก่น', 
        mapUrl: 'https://maps.app.goo.gl/aPPQW33196HWtwTdA?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'Bueng Kaen Nakhon' : 'บึงแก่นนคร', 
        description: language === 'en' ? 'Large lake with recreational activities' : 'ทะเลสาบขนาดใหญ่พร้อมกิจกรรมนันทนาการ', 
        mapUrl: 'https://maps.app.goo.gl/m4LbmxQgScHY8yo19?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'Rim Rom Night Market' : 'ตลาดโต้รุ่งรื่นรมย์', 
        description: language === 'en' ? 'A lively night market in Khon Kaen' : 'ตลาดโต้รุ่งที่คึกคักในขอนแก่น', 
        mapUrl: 'https://maps.app.goo.gl/UxDamdexv43UWHWU7?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'Central Plaza Khon Kaen' : 'ห้างสรรพสินค้า เซ็นทรัล ขอนแก่น', 
        description: language === 'en' ? 'A large shopping center in Khon Kaen' : 'ศูนย์การค้าขนาดใหญ่ในขอนแก่น', 
        mapUrl: 'https://maps.app.goo.gl/JUL9461kwWFDT3aFA?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'Ton Tann Market' : 'ตลาดต้นตาล', 
        description: language === 'en' ? 'A trendy outdoor market in Khon Kaen' : 'ตลาดกลางแจ้งที่ฮิตในขอนแก่น', 
        mapUrl: 'https://maps.app.goo.gl/Hq7emztrVtMEmzvr9?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'Kyoto Shi Cafe' : 'Kyoto Shi Cafe キョウトシ カフェขอนแก่น', 
        description: language === 'en' ? 'A Japanese-style cafe' : 'คาเฟ่สไตล์ญี่ปุ่น', 
        mapUrl: 'https://maps.app.goo.gl/24bR4gAABWmQUQmG9?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'TEMPRIS Café & Maesalong Croissant' : 'TEMPRIS Café & Maesalong Croissant ขอนแก่น', 
        description: language === 'en' ? 'A cozy cafe known for its croissants' : 'คาเฟ่ที่โดดเด่นด้วยครัวซองต์', 
        mapUrl: 'https://maps.app.goo.gl/8yBfi4xA4g85KCNX7?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'The Simple Cafe and Bakery' : 'The Simple Cafe and Bakery', 
        description: language === 'en' ? 'A small bakery offering fresh pastries' : 'เบเกอรี่เล็กๆ ที่มีขนมอบสดใหม่', 
        mapUrl: 'https://maps.app.goo.gl/b2mgpPiYCVPVfBWC9?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'Bluekoff Khonkaen' : 'Bluekoff ขอนแก่น', 
        description: language === 'en' ? 'A specialty coffee shop in Khon Kaen' : 'ร้านกาแฟพิเศษในขอนแก่น', 
        mapUrl: 'https://maps.app.goo.gl/7H672Qya92ZcoYmj9?g_st=com.google.maps.preview.copy' 
    },
    { 
        name: language === 'en' ? 'Trinity Cafe' : 'Trinity Cafe', 
        description: language === 'en' ? 'A cozy cafe with a wide range of drinks' : 'คาเฟ่บรรยากาศอบอุ่นพร้อมเครื่องดื่มหลากหลาย', 
        mapUrl: 'https://maps.app.goo.gl/g1SxKuL6Wose8kyg9?g_st=com.google.maps.preview.copy' 
    },
];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('nearbyAttractions')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{attraction.name}</h2>
            <p className="mb-4">{attraction.description}</p>
            <a 
              href={attraction.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-white px-4 py-2 rounded hover:bg-sage transition duration-300"
            >
              {t('viewDetails')}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attractions;