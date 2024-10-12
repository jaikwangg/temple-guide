import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('aboutTitle')}</h1>
      <p className="mb-4">
        {t('aboutDescription')}
      </p>
      <h2 className="text-2xl font-semibold mb-2">{t('history')}</h2>
      <p className="mb-4">
        {language === 'en'
          ? 'Wat Nong Wang, formerly known as Wat Nuea, was established in 1789 (B.E. 2332) along with Wat Klang and Wat That by Thao Phia Muang Pan, the first ruler, in Ban Bueng Bon (Bueng Kaen Nakhon). Later in 1811 (B.E. 2354), Thao Chammut, the second ruler, relocated the city to Ban Don Panchat in Maha Sarakham Province, turning Ban Bueng Bon into an old town. The temple then became known as Wat Nong Wang Muang Kao.'
          : 'วัดหนองแวง เดิมชื่อ วัดเหนือ ตั้งวัดเมื่อ พ.ศ. 2332 พร้อมกับ วัดกลาง และ วัดธาตุสร้างโดย ท้าวเพียเมืองแพน เจ้าเมืองคนแรก ณ บ้านบึงบอน (บึงแก่นนคร) ต่อมา พ.ศ. 2354 ท้าวจามมุตร เจ้าเมืองคนที่ 2 ได้ย้ายเมืองไปอยู่บ้านดอนพันชาติ เขตเมืองมหาสารคาม บ้านบึงบอนจึงกลายเป็นเมืองเก่า วัดจึงมีอีกนามว่า วัดหนองแวงเมืองเก่า'}
      </p>

      <h2 className="text-2xl font-semibold mb-2">{t('architecture')}</h2>
      <p className="mb-4">
        {language === 'en'
          ? 'The temple features Phra Mahathat Kaen Nakhon, a nine-story stupa with a square base measuring 50 meters on each side. The top of the stupa is modeled after Phra That Kham Kaen. It was built to commemorate the 50th anniversary of His Majesty King Bhumibol Adulyadej\'s reign and the 200th anniversary of Khon Kaen. The stupa stands 80 meters tall, with four smaller stupas at each corner. It is surrounded by a seven-headed Naga wall, a blend of Dvaravati and Indochinese art styles.'
          : 'วัดมี พระมหาธาตุแก่นนคร เป็นพระธาตุเก้าชั้นฐานสี่เหลี่ยมกว้างด้านละ 50 เมตร เรือนยอดทรงเจดีย์จำลองแบบจาก พระธาตุขามแก่น จัดสร้างขึ้นเนื่องในวโรกาสที่ พระบาทสมเด็จพระมหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตรทรงครองสิริราชสมบัติครบ 50 ปี และมหามังคลานุสรณ์ 200 ปีเมืองขอนแก่น พระธาตุสูง 80 เมตร มีพระจุลธาตุ 4 องค์ ตั้งอยู่ 4 มุม และมีกำแพงแก้วพญานาค 7 เศียรล้อมรอบ เป็นศิลปะทวารวดีผสมผสานศิลปะอินโดจีน'}
      </p>

      <h2 className="text-2xl font-semibold mb-2">{t('significance')}</h2>
      <p className="mb-4">
        {language === 'en'
          ? 'Wat Nong Wang was first granted the Wisungkhama Sima (land for religious boundary) in 1899 (B.E. 2442) and was most recently granted it on August 27, 1984 (B.E. 2527). The temple\'s Sima boundary is 40 meters wide and 80 meters long. In 1984, the temple was elevated to the status of a royal temple.'
          : 'วัดหนองแวงได้รับพระราชทานวิสุงคามสีมาครั้งแรกเมื่อ พ.ศ. 2442 และได้รับพระราชทานวิสุงคามสีมาครั้งสุดท้าย เมื่อวันที่ 27 สิงหาคม พ.ศ. 2527 เขตวิสุงคามสีมา กว้าง 40 เมตร ยาว 80 เมตร ต่อมาเมื่อ พ.ศ. 2527 ได้ยกฐานะขึ้นเป็นพระอารามหลวง'}
      </p>
    </div>
  );
};

export default About;