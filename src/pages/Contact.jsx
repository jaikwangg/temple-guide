import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('contactUs')}</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">{t('watNongWaeng')}</h2>
        <p className="mb-2">{t('address')}: ที่อยู่ ซอย วัดหนองแวง เลขที่ 593 ถนนกลางเมือง ตำบลในเมือง อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000</p>
        <p className="mb-2">{t('phone')}: 043-221 664</p>
        <p className="mb-2">{t('email')}: phra.maha.thart@gmail.com</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-2">{t('openingHours')}</h3>
        <p className="mb-2">{t('mondayToSunday')}: 08.00-18.00 น.</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-2">{t('transportation')}</h3>
        <p className="mb-2">{t('transportationInfo')}</p>

        {/* Embed Google Map */}
        <div className="mt-8">
          <iframe
            src="https://maps.google.com/maps?q=16.4386892,102.8375745&z=15&output=embed"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Wat Nong Waeng Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
