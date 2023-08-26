import { useTranslation } from 'react-i18next';
import Image from 'next/image';

type GlassScreenProps = {
  glass: number;
  isFocus: boolean;
};

export const GlassScreen = ({ glass, isFocus }: GlassScreenProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {isFocus ? (
        <div className="z-30 absolute w-[100vw] h-[46.875vw]">
          <div className="flex gap-[11px] items-center">
            <div className="mt-[10vw] ml-[22.3vw] font-notoSansBold text-white text-[42px]">
              {t(`glass.${glass}.title`)}
            </div>
            <div className="mt-[11vw] font-notoSans text-white text-[18px]">
              {t(`glass.${glass}.subTitle`)}
            </div>
          </div>
          <div className="mt-[27px] ml-[22.3vw] font-notoSans text-white text-[24px]">
            {t(`glass.${glass}.description`)}
          </div>
        </div>
      ) : null}
      <div className="w-[100vw] h-[46.875vw] relative">
        <Image src={`/images/GlassScreenImage${glass}.png`} alt="glass" fill />
      </div>
    </div>
  );
};
