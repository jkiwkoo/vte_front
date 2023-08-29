import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image';

export const Screen = () => {
  const { t } = useTranslation();
  const [currentScreen, setCurrentScreen] = useState(1);

  return (
    <div className="h-[51.042vw] bg-vte-blue flex relative overflow-hidden">
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
          <div className="font-notoSans text-[28px] text-white mt-[25px]">
            {t(`screen.1`)}
          </div>
        </div>
        <div className="w-[62.5vw] h-[51.042vw] absolute">
          <Image src={`/images/Screen1.png`} alt="screen" fill quality={100} />
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
          <div className="font-notoSans text-[28px] text-white mt-[25px]">
            {t(`screen.2`)}
          </div>
        </div>
        <div className="w-[62.5vw] h-[51.042vw] absolute">
          <Image src={`/images/Screen2.png`} alt="screen" fill quality={100} />
        </div>
      </div>
      <div
        className={`flex justify-start transition-all ${
          currentScreen === 3
            ? 'w-[62.5vw]'
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
          <div className="font-notoSans text-[28px] text-white mt-[25px]">
            {t(`screen.3`)}
          </div>
        </div>
        <div className="w-[62.5vw] h-[51.042vw] absolute">
          <Image src={`/images/Screen3.png`} alt="screen" fill quality={100} />
        </div>
      </div>
    </div>
  );
};
