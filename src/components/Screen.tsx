import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Screen = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [currentScreen, setCurrentScreen] = useState(1);

  return (
    <div className="pt-[100px] h-[51.042vw] bg-vte-blue flex relative overflow-hidden">
      <div
        className={`flex justify-start transition-all ${
          currentScreen === 1
            ? 'w-[62.5vw]'
            : 'w-[18.72vw] hover:cursor-pointer'
        } duration-1000`}
        onClick={() => {
          setCurrentScreen(1);
        }}
      >
        <div className="absolute z-30 mt-[7.81vw] pl-[3.125vw]">
          <div className="font-notoSansBold text-white text-[46px] w-min">
            {`01`}
            <div className="mt-[10px] border-[2px] border-white"></div>
          </div>
          <div className="font-notoSans font-bold text-[40px] text-white mt-[25px]">
            {t(`screen.1.title`)}
          </div>
          <div className="font-notoSans font-bold text-[40px] text-white translate-y-[-10px]">
            {t(`screen.1.title2`)}
          </div>
          <div
            className={`${
              currentScreen === 1 ? 'transition-all animate-fade-in' : 'hidden'
            }`}
          >
            <div className="font-notoSans text-white text-[22px] mt-[30px]">
              {t('screen.1.description')}
            </div>
            <div className="font-notoSans text-white text-[22px]">
              {t('screen.1.description2')}
            </div>
            <Image
              className="translate-x-[250px] translate-y-[-190px] hover:cursor-pointer"
              src={'/images/Right2.png'}
              width={30}
              height={57}
              alt="Right2"
              onClick={() => {
                router.push({
                  pathname: `/products`,
                  query: {
                    product: 1,
                  },
                });
              }}
            />
            <Image
              className="translate-x-[270px] translate-y-[-247px] hover:cursor-pointer"
              src={'/images/Right2.png'}
              width={30}
              height={57}
              alt="Right2"
              onClick={() => {
                router.push({
                  pathname: `/products`,
                  query: {
                    product: 1,
                  },
                });
              }}
            />
          </div>
        </div>
        <div className="w-[62.5vw] h-[51.042vw] absolute">
          <Image src={`/images/_Screen1.png`} alt="screen" fill quality={100} />
        </div>
      </div>
      <div
        className={`flex justify-start transition-all ${
          currentScreen === 2
            ? 'w-[62.5vw]'
            : 'w-[18.72vw] hover:cursor-pointer'
        } duration-1000`}
        onClick={() => {
          setCurrentScreen(2);
        }}
      >
        <div className="absolute z-30 mt-[7.81vw] pl-[3.125vw]">
          <div className="font-notoSansBold text-white text-[46px] w-min">
            {`02`}
            <div className="mt-[10px] border-[2px] border-white"></div>
          </div>
          <div className="font-notoSans font-bold text-[40px] text-white mt-[25px]">
            {t(`screen.2.title`)}
          </div>
          <div className="font-notoSans font-bold text-[40px] text-white translate-y-[-10px]">
            {t(`screen.2.title2`)}
          </div>
          <div
            className={`${
              currentScreen === 2 ? 'transition-all animate-fade-in' : 'hidden'
            }`}
          >
            <div className="font-notoSans text-white text-[22px] mt-[30px]">
              {t('screen.2.description')}
            </div>
            <div className="font-notoSans text-white text-[22px]">
              {t('screen.2.description2')}
            </div>
            <Image
              className="translate-x-[250px] translate-y-[-190px] hover:cursor-pointer"
              src={'/images/Right2.png'}
              width={30}
              height={57}
              alt="Right2"
              onClick={() => {
                router.push({
                  pathname: `/products`,
                  query: {
                    product: 2,
                  },
                });
              }}
            />
            <Image
              className="translate-x-[270px] translate-y-[-247px] hover:cursor-pointer"
              src={'/images/Right2.png'}
              width={30}
              height={57}
              alt="Right2"
              onClick={() => {
                router.push({
                  pathname: `/products`,
                  query: {
                    product: 2,
                  },
                });
              }}
            />
          </div>
        </div>
        <div className="w-[62.5vw] h-[51.042vw] absolute">
          <Image src={`/images/_Screen2.png`} alt="screen" fill quality={100} />
        </div>
      </div>
      <div
        className={`flex justify-start transition-all ${
          currentScreen === 3
            ? 'w-[62.3vw]'
            : 'w-[18.72vw] hover:cursor-pointer'
        } duration-1000`}
        onClick={() => {
          setCurrentScreen(3);
        }}
      >
        <div className="absolute z-30 mt-[7.81vw] pl-[3.125vw]">
          <div className="font-notoSansBold text-white text-[46px] w-min">
            {`03`}
            <div className="mt-[10px] border-[2px] border-white"></div>
          </div>
          <div className="font-notoSans font-bold text-[40px] text-white mt-[25px]">
            {t(`screen.3.title`)}
          </div>
          <div
            className={`${
              currentScreen === 3 ? 'transition-all animate-fade-in' : 'hidden'
            }`}
          >
            <div className="font-notoSans text-white text-[22px] mt-[30px]">
              {t('screen.3.description')}
            </div>
            <div className="font-notoSans text-white text-[22px]">
              {t('screen.3.description2')}
            </div>
            <Image
              className="translate-x-[200px] translate-y-[-170px] hover:cursor-pointer"
              src={'/images/Right2.png'}
              width={30}
              height={57}
              alt="Right2"
              onClick={() => {
                router.push({
                  pathname: `/products`,
                  query: {
                    product: 4,
                  },
                });
              }}
            />
            <Image
              className="translate-x-[220px] translate-y-[-227px] hover:cursor-pointer"
              src={'/images/Right2.png'}
              width={30}
              height={57}
              alt="Right2"
              onClick={() => {
                router.push({
                  pathname: `/products`,
                  query: {
                    product: 4,
                  },
                });
              }}
            />
          </div>
        </div>
        <div className="w-[62.5vw] h-[51.042vw] absolute">
          <Image src={`/images/_Screen3.png`} alt="screen" fill quality={100} />
        </div>
      </div>
    </div>
  );
};
