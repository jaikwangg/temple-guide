import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Restaurants = () => {
  const { t, language } = useLanguage();

  const restaurants = [
    { 
      name: language === 'en' ? 'Pa Auan Thai Restaurant' : 'ร้าน อาหารป้าอ้วน', 
      description: language === 'en' ? 'Isaan food restaurant, Contact: 0985028080' : 'ร้านอาหารอีสาน เบอร์ติดต่อ 0985028080', 
      mapUrl: 'https://maps.app.goo.gl/aJQY2AMaJUo4XWsR8?g_st=com.google.maps.preview.copy'
    },
    { 
      name: language === 'en' ? 'DN Dang Nong Nuang Naem Neung' : 'DN แดงหน่องแหนมเนือง', 
      description: language === 'en' ? 'Vietnamese food restaurant, Contact: 043227878' : 'ร้านอาหารเวียดนาม เบอร์ติดต่อ 043227878',
      mapUrl: 'https://maps.app.goo.gl/a9u7e1aWmqXPjZWLA?g_st=com.google.maps.preview.copy' 
    },
    { 
      name: language === 'en' ? 'Tum Kathoey (Khon Kaen Branch)' : 'ตำกระเทย สาขาขอนแก่น หน้าเมือง', 
      description: language === 'en' ? 'Isaan food restaurant, Contact: 043057788' : 'ร้านอาหารอีสาน เบอร์ติดต่อ 043057788',
      mapUrl: 'https://maps.app.goo.gl/CzfEqdXVWq8ohifz8?g_st=com.google.maps.preview.copy' 
    },
    { 
      name: language === 'en' ? 'Hua Lamphong Noodle' : 'ก๋วยเตี๋ยวหัวลำโพง', 
      description: language === 'en' ? 'Noodle restaurant, Contact: 0859858069' : 'ร้านก๋วยเตี๋ยว เบอร์ติดต่อ 0859858069',
      mapUrl: 'https://maps.app.goo.gl/97VRdvgKt8pEYeQ67?g_st=com.google.maps.preview.copy' 
    },
    { 
      name: language === 'en' ? 'Steak Baan Hao' : 'สเต๊กบ้านเฮา', 
      description: language === 'en' ? 'International cuisine, Contact: 0896180885' : 'ร้านอาหารนานาชาติ เบอร์ติดต่อ 0896180885',
      mapUrl: 'https://maps.app.goo.gl/Dzgcr9gavt8kawLR6?g_st=com.google.maps.preview.copy' 
    },
    { 
      name: language === 'en' ? 'Nong Fah Made-to-Order' : 'น้องฟ้า อาหารตามสั่ง', 
      description: language === 'en' ? 'Made-to-order food restaurant, Contact: 0628233295' : 'ร้านอาหารตามสั่ง เบอร์ติดต่อ 0628233295',
      mapUrl: 'https://maps.app.goo.gl/7rEeeQoAUvZbjhi67?g_st=com.google.maps.preview.copy' 
    },
    { 
      name: language === 'en' ? 'Jaew Hon Thung Kaen' : 'แจ่วฮ้อนถึงแก่น', 
      description: language === 'en' ? 'Jaew Hon (hot pot) restaurant, Contact: 0621633442' : 'ร้านแจ่วฮ้อน เบอร์ติดต่อ 0621633442',
      mapUrl: 'https://maps.app.goo.gl/ymUe6TqDq1B7HB8G9?g_st=com.google.maps.preview.copy' 
    },
    { 
      name: language === 'en' ? 'Krua Mae Thong Yen' : 'ครัวแม่ทองเย็น', 
      description: language === 'en' ? 'Garden restaurant, Contact: 0652394566' : 'สวนอาหาร เบอร์ติดต่อ 0652394566',
      mapUrl: 'https://maps.app.goo.gl/oQR9xLwh91k5VKyd6?g_st=com.google.maps.preview.copy' 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('nearbyRestaurants')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
            <p className="mb-4">{restaurant.description}</p>
            <a 
              href={restaurant.mapUrl} 
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

export default Restaurants;