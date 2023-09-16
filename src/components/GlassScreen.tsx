import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

type GlassScreenProps = {
  glass: number;
  isFocus: boolean;
};

export const GlassScreen = ({ glass, isFocus }: GlassScreenProps) => {
  const { t } = useTranslation();

  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          target === ref.current ? setVisible(isIntersecting) : null;
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {isFocus ? (
        <div
          className={`z-30 absolute w-[100vw] h-[46.875vw] ${
            visible ? 'opacity-100 animate-fade-in-down' : 'opacity-0'
          }`}
          ref={ref}
        >
          <div className="mt-[10vw] ml-[22.3vw] font-notoSansBold font-bold text-white text-[42px]">
            {t(`glass.${glass}.title`)}
          </div>
          <div className="mt-[30px] ml-[22.3vw] font-notoSans text-white text-[22px]">
            {t(`glass.${glass}.description`)}
          </div>
          <div className="ml-[22.3vw] font-notoSans text-white text-[22px]">
            {t(`glass.${glass}.description2`)}
          </div>
          <div
            className="mt-[30px] ml-[22.3vw] font-notoSans text-gray-300 hover:text-white text-[22px] hover:cursor-pointer"
            onClick={() => {
              router.push({
                pathname: `/products`,
                query: {
                  product: glass,
                },
              });
            }}
          >
            {t('word.more')}
          </div>
        </div>
      ) : null}
      <div className="w-[100vw] h-[46.875vw] relative">
        <Image
          src={`/images/GlassScreenImage${glass}.png`}
          alt="glass"
          fill
          quality={100}
        />
      </div>
    </div>
  );
};
