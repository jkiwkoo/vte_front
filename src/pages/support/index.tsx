import { ContactUs } from '@/components/ContactUs';
import { CustomerSupport } from '@/components/CustomerSupport';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Support = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [isContactUs, setIsContactUs] = useState(false);

  useEffect(() => {
    router.query?.tab ? setIsContactUs(true) : null;
  }, []);

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
        <div className="flex justify-center mb-[5.625vw]">
          <div className="w-[15.625vw] h-[17.708vw] relative">
            <div className="absolute z-30 flex flex-col items-start justify-end w-full h-full p-[1.5vw] text-white font-notoSans">
              <div className="text-[24px] font-bold mb-[5px]">
                {t('glass.1.title')}
              </div>
              <div
                className="text-[16px] hover:cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: `/products`,
                    query: {
                      product: 1,
                    },
                  });
                }}
              >
                {t('word.more')}
              </div>
            </div>
            <Image
              src={'/images/SupportProduct1.png'}
              fill
              priority
              quality={100}
              alt="SupportProduct"
            />
          </div>
          <div className="w-[15.625vw] h-[17.708vw] relative">
            <div className="absolute z-30 flex flex-col items-start justify-end w-full h-full p-[1.5vw] text-white font-notoSans">
              <div className="text-[24px] font-bold mb-[5px]">
                {t('glass.2.title')}
              </div>
              <div
                className="text-[16px] hover:cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: `/products`,
                    query: {
                      product: 2,
                    },
                  });
                }}
              >
                {t('word.more')}
              </div>
            </div>
            <Image
              src={'/images/SupportProduct2.png'}
              fill
              priority
              quality={100}
              alt="SupportProduct"
            />
          </div>
          <div className="w-[15.625vw] h-[17.708vw] relative">
            <div className="absolute z-30 flex flex-col items-start justify-end w-full h-full p-[1.5vw] text-white font-notoSans">
              <div className="text-[24px] font-bold mb-[5px]">
                {t('glass.3.title')}
              </div>
              <div
                className="text-[16px] hover:cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: `/products`,
                    query: {
                      product: 3,
                    },
                  });
                }}
              >
                {t('word.more')}
              </div>
            </div>
            <Image
              src={'/images/SupportProduct3.png'}
              fill
              priority
              quality={100}
              alt="SupportProduct"
            />
          </div>
          <div className="w-[15.625vw] h-[17.708vw] relative">
            <div className="absolute z-30 flex flex-col items-start justify-end w-full h-full p-[1.5vw] text-white font-notoSans">
              <div className="text-[24px] font-bold mb-[5px]">
                {t('glass.4.title')}
              </div>
              <div
                className="text-[16px] hover:cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: `/products`,
                    query: {
                      product: 4,
                    },
                  });
                }}
              >
                {t('word.more')}
              </div>
            </div>
            <Image
              src={'/images/SupportProduct4.png'}
              fill
              priority
              quality={100}
              alt="SupportProduct"
            />
          </div>
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
