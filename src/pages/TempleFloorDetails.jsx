import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

import floor2Image from '../asset/images/temple-floors/2.png';
import floor5Image from '../asset/images/temple-floors/5.png';
import floor7Image from '../asset/images/temple-floors/7.png';
import floor8Image from '../asset/images/temple-floors/8.png';
import floor1Image from '../asset/images/temple-floors/1.png';
import floor3Image from '../asset/images/temple-floors/3.png';
import floor4Image from '../asset/images/temple-floors/4.png';
import floor9Image from '../asset/images/temple-floors/9.png';
import floor6Image from '../asset/images/temple-floors/6.png';

const TempleFloorDetails = () => {
  const { floorNumber } = useParams();
  const { t, language } = useLanguage();

  const floorInfo = [
    { name: language === 'en' ? '1st Floor' : 'ชั้นที่ 1', 
      description: language === 'en' ? 'On the 1st floor of Phra Mahathat Kaen Nakhon, you’ll find a relic hall housing the Buddha’s relics and Arahants around it. A statue of Luang Pu Koon Kantigo is on the right side, with five seated Buddha images behind the relics. The central Buddha faces west towards the city center, while the Ubosot faces east toward Bueng Kaen Nakhon. Currently, this floor is used for paying respects to the body of Luang Pu Koon, the initiator of the construction of the Mahathat. The murals here depict the history of Khon Kaen, its traditions, important local landmarks, and daily life. The windows and doors are carved with scenes from the Champa Si Ton folktale.' : 'บริเวณชั้นที่ 1 ของพระมหาธาตุแก่นนครฯ จะมีบุษบทประดิษฐานพระบรมสารีริกธาตุและพระอรหันตสาวกโดยรอบ มีรูปปั้นเหมือนหลวงปู่คูณ ขันติโก อยู่ด้านฝั่งขวาของด้านหน้าพระบรมสารีริกธาตุ ด้านหลังของพระบรมสารีริกธาตุ เป็นที่ประดิษฐานพระพุทธรูปปางประธาน 5 องค์ องค์กลางรวมถึงพระมหาธาตุนั้นได้หันหน้าไปทางด้านทิศตะวันตกหรือถนนกลางเมือง (ในขณะที่พระอุโบสถจะหันหน้าไปทางด้านทิศตะวันออกหรือบึงแก่นนคร) อีกสององค์อยู่ด้านทิศใต้ และอีกสององค์อยู่ด้านทิศเหนือ ปัจจุบัน บริเวณชั้น 1 ทางวัดได้จัดสถานที่สักการะสรีรสังขารของหลวงปู่คูณ ขันติโก ผู้ริเริ่มสร้างพระมหาธาตุแก่นนคร อนุสรณ์สาธุชนแห่งนี้นอกจากนี้ในส่วนของจิตรกรรมฝาผนังที่วาดประดับตกแต่งในชั้น 1 จะประกอบไปด้วยประวัติศาสตร์การตั้งถิ่นฐานของชาวเมืองขอนแก่น ฮีตสิบสอง สถานที่สำคัญของท้องถิ่น และวิถีท้องถิ่นของเมืองขอนแก่นในอดีต และส่วนหน้าต่างและประตูทางเข้าชั้น 1 จะเป็นภาพแกะสลักไม้นิทานเรื่อง จำปาสี่ต้น' },
    { name: language === 'en' ? '2nd Floor' : 'ชั้นที่ 2', 
      description: language === 'en' ? 'The 2nd floor serves as a local museum, preserving daily tools used by the Isan people. There’s also a display of ancient scriptures and human skeletons with moral teachings. Murals depict "Kalam" or Isan taboos, and stories such as Sinxay, a local folktale. Kalam teaches respect for elders and moral conduct in family life. Some images illustrate taboos that, though outdated, are still practiced, like the belief that sharpening knives at night brings bad luck. The doors are also carved with scenes from the Sinxay folktale, which is a prominent part of Khon Kaen’s local culture.' : 'บริเวณชั้นที่ 2 ของพระมหาธาตุแก่นนครฯ จะเป็นพิพิธภัณฑ์ท้องถิ่น เก็บรักษาเครื่องมือเครื่องใช้ในชีวิตประจำวันของชาวอีสาน มีตู้พระธรรมเก็บคัมภีร์ใบลานรูปแบบอีสานโบราณ มีโครงกระดูกมนุษย์สอนใจธรรมะ นอกจากนี้ยังมีจิตรกรรมฝาผนังเกี่ยวกับ คะลำ หรือ ข้อห้ามปฏิบัติของชาวอีสาน และนิทานเรื่อง สินไซ ที่บานประตูหน้าต่าง เป็นต้น “คะลำ” จิตรกรรมฝาผนังวัดหนองแวงพระอารามหลวง จังหวัดขอนแก่น คนสมัยใหม่หลายคนไม่รู้และก็ไม่ได้ยึดถือกฏเกณฑ์ “คะลำ” เหล่านี้แล้ว แต่ก็มีบางข้อที่มีผู้ปฏิบัติอยู่แม้ว่าจะดูล้าสมัย เช่น ไม่ให้ลับมีดตอนกลางคืน ด้วยเชื่อว่าชีวิตจะมีภัย จะโชคร้าย จะตาย เมียจะมีชู้ ฯลฯ คะลำข้อนี้มีผู้ให้เหตุผลว่า เมื่อก่อนไม่มีไฟฟ้าใช้ ลับมีดใต้แสงเทียนโอกาสบาดนิ้วจึงสูง..คะลำ ในภาษาอีสาน จึงหมายถึง สิ่งที่ห้ามทำคะลำโดยส่วนใหญ่ของจิตรกรรมฝาผนังของพระมหาธาตุแก่นนคร วัดหนองแวงพระอารามหลวง ขอนแก่น แห่งนี้ กล่าวถึงการเคารพต่อผู้อาวุโสและผู้มีฐานะสูงกว่าเช่น พระสงฆ์ สอนเรื่องมารยาทการอยู่ร่วมกันในครอบครัวและสังคม เพื่ออยู่ร่วมกันอย่างผาสุก และรวมถึงข้อห้ามกระทำต่างๆ ที่แฝงเอาไว้เพื่อความปลอดภัยต่อชีวิตตนเองและผู้อื่นข้อคะลำทั้งหมดกว่า 32 ภาพ ที่ชั้น 2 ของพระมหาธาตุแก่นนคร นอกจากจะได้สาระความรู้และความเพลิดเพลินเกี่ยวกับคะลำอีสานผ่านจิตรกรรมฝาผนังโดยฝีมือช่างศิลป์ ครูธรรมรงค์ แก้วโบราณ แล้ว ตัวละครต่างๆ ที่ถูกถ่ายทอดผ่านเรื่องราวอย่างมีสีสันและกลิ่นไอของวิถีชีวิตดั้งเดิมคนอีสาน ก็ทำให้เราสามารถเข้าใจความหมายของคะลำแต่ละข้อได้อย่างง่ายดายและรวดเร็วอีกด้วยหน้าต่างและประตูวาดภาพเป็นนิทานที่มีชื่อเสียงของแถบลุ่มแม่น้ำโขง โดยเฉพาะในภาคอีสานของไทยและสปป.ลาว เรื่อง สินไซ โดยในเมืองขอนแก่นได้คัดเลือกนิทานเรื่องนี้ ในการใช้ตัวละครประดับประดาสถานที่ต่างๆ ไม่ว่าจะเป็นเสาไฟ ด้วยตัวละครหลักคือ สินไซ หอยสังข์ และสีโห หรือรูปปั้นสีโหบริเวณศาลหลักเมือง เป็นต้น นอกจากนี้ยังมีจิตรกรรมฝาผนังเรื่องนี้ที่สิมหรืออุโบสถอยู่หลายวัด อันเป็นอัตลักษณ์เฉพาะของช่างเขียนท้องถิ่น ที่มีชื่อเสียงอยู่หลายแห่งด้วยกันคะลำหรือข้อห้ามทำ เช่น สะใภ้ไม่ควรยืนค้ำหัว บางส่วนของภาพคะลำ 32 ภาพ ในชั้นสอง ฝีมือการวาดของครูธรรมรงค์ แก้วโบราณ ซึ่งครูธรรมรงค์ได้ฝากฝีมือศิลปินท้องถิ่นอีสานคนขอนแก่นเกือบทุกชั้นของพระมหาธาตุแก่นนครแห่งนี้' },
    { name: language === 'en' ? '3rd Floor' : 'ชั้นที่ 3', 
      description: language === 'en' ? 'The 3rd floor houses a repository of religious items, including fans and belongings of prominent monks. Murals depict the Vessantara Jataka, and the windows show illustrations of Nang Phom Hom, a popular local folktale. From this floor, you can also view the beautiful relic hall below.' : 'หอปริยัติ ประกอบไปด้วยตู้เก็บตาลปัตร พัดยศ และเครื่องอัฐบริขารของพระภิกษุผู้มีชื่อเสียงในขอนแก่น นอกจากนี้ยังมีภาพวาดจิตรกรรมฝาผนัง เรื่อง พระเวสสันดร และหน้าต่างเป็นภาพวาด เรื่อง นางผมหอม จากชั้นสามเป็นชั้นสูงสุดที่มีช่องภายในพระมหาธาตุแก่นนคร ที่สามารถมองลงไปเห็นบุษบทที่สวยงามของพระบรมสารีริกธาตุและพระสาวกในชั้นล่างได้' },
    { name: language === 'en' ? '4th Floor' : 'ชั้นที่ 4', 
      description: language === 'en' ? 'The 4th floor is a museum displaying ancient artifacts. The murals on the doors and windows depict stories of Buddha’s birth, guardian deities, and animals. The murals also feature the life of Luang Pu Koon, from his childhood to becoming the abbot of Wat Nong Wang and leading the construction of Phra Mahathat.' : 'หอปริยัติธรรม เป็นพิพิธภัณฑ์ที่รวบรวมของเก่า สำหรับภาพจิตรกรรมบนบานประตูและหน้าต่างเป็นภาพพระประจำวันเกิด เทพนพเคราะห์ เทพประจำทิศและสัตว์ประจำทิศ  และภาพจิตรกรรมฝาผนังเป็นภาพประวัติของหลวงปู่คูณ ขันติโก ตามคำบอกเล่าของหลวงปู่เอง โดยเริ่มต้นตั้งแต่วัยเยาว์ จากเด็กชายคูณ สุยอย กำเนิดที่บ้านอุปราช ต.ท่าสองคอน อ.เมือง จ.มหาสารคาม จนกระทั่งเป็นเจ้าอาวาสวัดหนองแวง เป็นผู้ริเริ่มการสร้างพระมหาธาตุแก่นนครและพัฒนาวัดหนองแวง พระอารามหลวงให้มีความเจริญรุ่งเรืองมาจนถึงปัจจุบัน วาดภาพโดยครูธรรมรงค์ แก้วโบราณ' },
    { name: language === 'en' ? '5th Floor' : 'ชั้นที่ 5', 
      description: language === 'en' ? 'This floor is dedicated to historical artifacts from Khon Kaen. The doors and windows are carved with scenes from the Buddha’s life, and there are murals featuring Isan proverbs and teachings. Currently, some murals are being painted, offering a glimpse into the artistic process.' : 'หอพิพิธภัณฑ์ มีบริขารของหลวงปู่พระครูปลัดบุษบา สุมโน อดีตเจ้าอาวาสรูปที่ 6 บานประตูหน้าต่างแกะสลักภาพพุทธประวัติ มีภาพวาดปริศนาธรรมและสุภาษิตอีสาน (ขณะนี้กำลังดำเนินการวาด สามารถศึกษาการวาดภาพจิตรกรรมฝาผนังได้ วาดโดยครูธรรมรงค์ แก้วโบราณ)' },
    { name: language === 'en' ? '6th Floor' : 'ชั้นที่ 6', 
      description: language === 'en' ? 'The 6th floor is an observation deck where visitors can view the surrounding city. The doors are carved with stories from the Buddha’s life.' : 'หอพระอุปัชฌายาจารย์ บานประตูแกะสลักภาพพุทธประวัติ' },
    { name: language === 'en' ? '7th Floor' : 'ชั้นที่ 7', 
      description: language === 'en' ? 'The 7th floor is a library dedicated to the Arahants. The doors and windows are carved with scenes from the Ten Great Birth Stories, focusing on the Vessantara Jataka.' : 'หอพระอรหันตสาวก บนบานประตูหน้าต่างแกะสลักเรื่อง ทศชาติชาดก เน้นเรื่อง พระเวสสันดร' },
    { name: language === 'en' ? '8th Floor' : 'ชั้นที่ 8', 
      description: language === 'en' ? 'This floor holds important Buddhist scriptures, including the Tripitaka. The doors are carved with images of the 16 Heavens of Brahma, and this carving continues up to the 9th floor.' : 'หอพระธรรม รวบรวมพระธรรมคัมภีร์สำคัญทางพระพุทธศาสนามีพระไตรปิฏก ฯลฯ บานประตูแะสลักรูปพรหม 16 ชั้น (จนถึงชั้นที่ 9) ' },
    { name: language === 'en' ? '9th Floor' : 'ชั้นที่ 9', 
      description: language === 'en' ? 'The top floor houses a shrine with a Buddha relic, gifted from Myanmar and the Supreme Patriarch of Thailand. The doors are intricately carved with 3D images of the 16 Heavens. Visitors can walk around the balcony for panoramic views of Khon Kaen.' : 'หอพระพุทธ มีบุษบกบรรจุพระบรมสารีริกธาตุของพระพุทธเจ้าที่ได้รับจากพม่าและสมเด็จพระสังฆราช บานประตูแกะสลักรูปพรหม 16 ชั้น 3 มิติ ด้านนอกสามารถเดินบนระเบียงชมทิวทัศน์เมืองขอนแก่นได้โดยรอบ' },
  ];

  const floorImages = {
    '1': floor1Image,
    '2': floor2Image,
    '3': floor3Image,
    '4': floor4Image,
    '5': floor5Image,
    '6': floor6Image,
    '7': floor7Image,
    '8': floor8Image,
    '9': floor9Image,
  };

  const floor = floorInfo[parseInt(floorNumber) - 1];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/temples" className="flex items-center text-gold hover:text-sage mb-4">
        <ArrowLeft className="mr-2" />
        {language === 'en' ? 'Back to Temples' : 'กลับไปที่หน้าวัด'}
      </Link>
      <h1 className="text-3xl font-bold mb-4">{floor.name}</h1>
      <p className="mb-4">{floor.description}</p>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        {floorImages[floorNumber] ? (
          <img 
            src={floorImages[floorNumber]}
            alt={`${floor.name} of Wat Nong Waeng`}
            className="w-full h-auto rounded-lg mx-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        ) : (
          <p>{language === 'en' ? 'Image not available for this floor.' : 'ไม่มีรูปภาพสำหรับชั้นนี้'}</p>
        )}
      </div>
    </div>
  );
};

export default TempleFloorDetails;