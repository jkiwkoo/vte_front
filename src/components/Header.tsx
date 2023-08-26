import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { VTELogo } from '@/assets/VTELogo';
import { Flag } from '@/components/Flag';

type HeaderProps = {
  isBlack: boolean;
};

export const Header = ({ isBlack }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`h-[100px] flex items-center justify-between border border-transparent border-b-black ${
        isBlack ? 'bg-black' : 'bg-vte-violet'
      }`}
    >
      <VTELogo className="ml-[18.75vw] hover:cursor-pointer" />
      <div className="flex items-center">
        <div className="flex h-[100px] pt-[50px] mr-[14vw] gap-[3.7vw] text-[18px] font-apple text-white">
          <div className="hover:cursor-pointer">{t('word.company')}</div>
          <div className="hover:cursor-pointer">{t('word.product')}</div>
          <div className="hover:cursor-pointer">{t('word.contact')}</div>
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
