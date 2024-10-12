import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    about: "About",
    temples: "Temples",
    restaurants: "Restaurants",
    attractions: "Attractions",
    contact: "Contact",
    welcome: "Welcome to พระมหาธาตุแก่นนคร",
    exploreTemples: "Explore Temples",
    aboutTitle: "About พระมหาธาตุแก่นนคร",
    aboutDescription: "พระมหาธาตุแก่นนคร, also known as Wat Nong Waeng or Wat 9 Chan, is a significant temple in Khon Kaen, Thailand.",
    history: "History",
    architecture: "Architecture",
    significance: "Significance",
    nearbyRestaurants: "Nearby Restaurants",
    nearbyAttractions: "Nearby Attractions",
    contactUs: "Contact Us",
    address: "Address",
    phone: "Phone",
    email: "Email",
    openingHours: "Opening Hours",
    transportation: "Transportation",
    templesInKhonKaen: "Temples in Khon Kaen",
    watNongWaeng: "Wat Nong Waeng (Wat 9 Chan)",
    templeDescription: "It is a third-class royal temple of the ordinary type under the Mahanikaya sect, located in Nai Mueang Subdistrict, Mueang Khon Kaen District, Khon Kaen Province. The temple occupies 26 rai and 65 square wah of land, with a title deed numbered 713, survey number 28, survey page 794, book 8, page 13. The temple's grounds and surrounding area are flat and hexagonal in shape, with villages surrounding three sides and Bueng Kaen Nakhon to the east of the temple.",
    learnMore: "Learn More",
    restaurantName: "Restaurant Name",
    restaurantDescription: "Cuisine type and brief description...",
    viewDetails: "View Details",
    attractionName: "Attraction Name",
    attractionDescription: "Brief description of the attraction...",
    mondayToSunday: "Monday - Sunday",
    transportationInfo: "Bus Route 8 Fare 9-15 THB ,Bus Route 13 Fare 9-15 THB ,Bus Route 23 Fare 9-15 THB",
  },
  th: {
    home: "หน้าแรก",
    about: "เกี่ยวกับ",
    temples: "วัด",
    restaurants: "ร้านอาหาร",
    attractions: "สถานที่ท่องเที่ยว",
    contact: "ติดต่อ",
    welcome: "ยินดีต้อนรับสู่พระมหาธาตุแก่นนคร",
    exploreTemples: "สำรวจวัด",
    aboutTitle: "เกี่ยวกับพระมหาธาตุแก่นนคร",
    aboutDescription: "พระมหาธาตุแก่นนคร หรือที่รู้จักกันในชื่อวัดหนองแวง หรือวัด 9 ชั้น เป็นวัดสำคัญในจังหวัดขอนแก่น ประเทศไทย",
    history: "ประวัติ",
    architecture: "สถาปัตยกรรม",
    significance: "ความสำคัญ",
    nearbyRestaurants: "ร้านอาหารใกล้เคียง",
    nearbyAttractions: "สถานที่ท่องเที่ยวใกล้เคียง",
    contactUs: "ติดต่อเรา",
    address: "ที่อยู่",
    phone: "โทรศัพท์",
    email: "อีเมล",
    openingHours: "เวลาทำการ",
    transportation: "การเดินทาง",
    templesInKhonKaen: "วัดในขอนแก่น",
    watNongWaeng: "วัดหนองแวง (วัด 9 ชั้น)",
    templeDescription: "เป็นพระอารามหลวงชั้นตรี ชนิดสามัญ สังกัดคณะสงฆ์ฝ่ายมหานิกาย ตั้งอยู่ในตำบลในเมือง อำเภอเมืองขอนแก่น จังหวัดขอนแก่น มีเนื้อที่ดินที่ตั้งวัด 26 ไร่ 65 ตารางวา โดยมีหนังสือแสดงกรรมสิทธิ์เป็นโฉนด 713 เลขที่ 28 หน้าสำรวจ 794 เล่มที่ 8 หน้า 13 ลักษณะพื้นที่ตั้งวัดและบริเวณโดยรอบเป็นที่ราบเรียบ เป็นลักษณะหกเหลี่ยม มีหมู่บ้านล้อมรอบสามด้าน และมีบึงแก่นนครอยู่ทางทิศตะวันออกของวัด",
    learnMore: "เรียนรู้เพิ่มเติม",
    restaurantName: "ชื่อร้านอาหาร",
    restaurantDescription: "ประเภทอาหารและคำอธิบายสั้นๆ...",
    viewDetails: "ดูรายละเอียด",
    attractionName: "ชื่อสถานที่ท่องเที่ยว",
    attractionDescription: "คำอธิบายสั้นๆ เกี่ยวกับสถานที่ท่องเที่ยว...",
    mondayToSunday: "ทุกวัน",
    transportationInfo: "รถโดยสารประจำทางสาย 8 อัตราค่าโดยสาร 9-15 บาท ,รถโดยสารประจำทางสาย 13 อัตราค่าโดยสาร 9-15 บาท ,รถโดยสารประจำทางสาย 23 อัตราค่าโดยสาร 9-15 บาท",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'th' : 'en');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);