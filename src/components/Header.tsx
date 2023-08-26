import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { VTELogo } from '@/assets/VTELogo';
import { Flag } from '@/components/Flag';
import { useRouter } from 'next/router';

type HeaderProps = {
  isBlack: boolean;
};

export const Header = ({ isBlack }: HeaderProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div
      className={`h-[100px] flex items-center justify-between border border-transparent border-b-black ${
        isBlack ? 'bg-black' : 'bg-vte-violet'
      }`}
    >
      <VTELogo
        className="ml-[18.75vw] hover:cursor-pointer"
        onClick={() => {
          router.push('/');
        }}
      />
      <div className="flex items-center">
        <div
          className={`flex h-[100px] pt-[50px] mr-[14vw] gap-[3.7vw] text-[18px] font-apple ${
            isBlack ? 'text-vte-gray-2' : 'text-white'
          } `}
        >
          <div>
            <div
              className={`hover:cursor-pointer ${
                isBlack && router.asPath === '/company' ? 'text-white' : null
              }`}
              onClick={() => {
                router.push('/company');
              }}
            >
              {t('word.company')}
            </div>
            <div
              className={`${
                isBlack && router.asPath === '/company' ? 'border' : null
              }`}
            ></div>
          </div>
          <div>
            <div
              className={`hover:cursor-pointer ${
                isBlack && router.asPath === '/products' ? 'text-white' : null
              }`}
              onClick={() => {
                router.push('/products');
              }}
            >
              {t('word.products')}
            </div>
            <div
              className={`${
                isBlack && router.asPath === '/products' ? 'border' : null
              }`}
            ></div>
          </div>
          <div>
            <div
              className={`hover:cursor-pointer ${
                isBlack && router.asPath === '/support' ? 'text-white' : null
              }`}
              onClick={() => {
                router.push('/support');
              }}
            >
              {t('word.support')}
            </div>
            <div
              className={`${
                isBlack && router.asPath === '/support' ? 'border' : null
              }`}
            ></div>
          </div>
        </div>
        <div className="h-[100px] pt-[40px] mr-[3.2vw]">
          <div className="h-[30px] w-[30px] rounded-full bg-white border border-white overflow-hidden flex items-center justify-center hover:cursor-pointer">
            <Flag lang={i18next.language} />
          </div>
        </div>
      </div>
    </div>
  );
};
