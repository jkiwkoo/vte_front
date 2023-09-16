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
    <div className="fixed w-full z-50">
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
            className={`flex h-[100px] pt-[39px] mr-[14vw] gap-[3.7vw] text-[18px] font-apple ${
              isBlack ? 'text-vte-gray-2' : 'text-white'
            } `}
          >
            <div
              className={`group hover:cursor-pointer h-min ${
                isBlack && router.asPath === '/company'
                  ? 'text-white'
                  : 'hover:text-white'
              }`}
              onClick={() => {
                router.push('/company');
              }}
            >
              <div>{t('word.company')}</div>
              <div
                className={`group-hover:border ${
                  isBlack && router.asPath === '/company' ? 'border' : null
                }`}
              ></div>
            </div>
            <div
              className={`group hover:cursor-pointer h-min ${
                isBlack && router.asPath.startsWith('/products')
                  ? 'text-white'
                  : 'hover:text-white'
              }`}
              onClick={() => {
                router.push('/products');
              }}
            >
              <div>{t('word.products')}</div>
              <div
                className={`group-hover:border h-min ${
                  isBlack && router.asPath === '/products' ? 'border' : null
                }`}
              ></div>
            </div>
            <div
              className={`group hover:cursor-pointer ${
                isBlack && router.asPath.startsWith('/support')
                  ? 'text-white'
                  : 'hover:text-white'
              }`}
              onClick={() => {
                router.push('/support');
              }}
            >
              <div>{t('word.support')}</div>
              <div
                className={`group-hover:border ${
                  isBlack && router.asPath === '/support' ? 'border' : null
                }`}
              ></div>
            </div>
          </div>
          <div className="h-[100px] flex items-center mr-[3.2vw]">
            <div className="h-[30px] w-[30px] rounded-full bg-white border border-white overflow-hidden flex items-center justify-center hover:cursor-pointer">
              <Flag lang={i18next.language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
