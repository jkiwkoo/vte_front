import { ContactUs } from '@/components/ContactUs';
import { CustomerSupport } from '@/components/CustomerSupport';
import { Header } from '@/components/Header';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Support = () => {
  const { t } = useTranslation();

  const [isContactUs, setIsContactUs] = useState(false);

  return (
    <>
      <Header isBlack={true} />
      <div className="bg-black text-white pb-[100px]">
        <div className="pt-[7.8125vw] mb-[38px] font-gmarketBold text-[40px] flex justify-center">
          {t('support.title')}
        </div>
        <div className="flex flex-col items-center font-apple text-vte-gray-4 text-[18px] mb-[5.625vw]">
          <div>{t('support.description.1')}</div>
          <div>{t('support.description.2')}</div>
          <div>{t('support.description.3')}</div>
        </div>
        <div className="flex justify-center gap-[3.5vw] text-white text-[24px] mb-[3.385vw]">
          <div
            className={`${
              isContactUs
                ? 'hover:cursor-pointer text-vte-gray-2 hover:text-white'
                : ''
            }`}
            onClick={() => {
              isContactUs ? setIsContactUs(false) : null;
            }}
          >
            {t('support.tab.1')}
          </div>
          <div
            className={`${
              !isContactUs
                ? 'hover:cursor-pointer text-vte-gray-2 hover:text-white'
                : ''
            }`}
            onClick={() => {
              !isContactUs ? setIsContactUs(true) : null;
            }}
          >
            {t('support.tab.2')}
          </div>
        </div>
        <div className="flex justify-center">
          {isContactUs ? <ContactUs /> : <CustomerSupport />}
        </div>
      </div>
    </>
  );
};

export default Support;
