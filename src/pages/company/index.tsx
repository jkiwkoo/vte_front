import { CompanyBar } from '@/components/CompanyBar';
import { Header } from '@/components/Header';
import { useTranslation } from 'react-i18next';

const Company = () => {
  const { t } = useTranslation();

  type TextProps = {
    text: string;
    noMargin?: boolean;
  };

  const TextWhite = ({ text, noMargin }: TextProps) => {
    return (
      <div
        className={`text-[20px] ${!noMargin ? 'mb-[20px]' : null} font-apple`}
      >
        {text}
      </div>
    );
  };

  const TextGray = ({ text, noMargin }: TextProps) => {
    return (
      <div
        className={`text-[18px] text-vte-gray-3 ${
          !noMargin ? 'mb-[20px]' : null
        } font-apple`}
      >
        {text}
      </div>
    );
  };

  const TextGraySmall = ({ text, noMargin }: TextProps) => {
    return (
      <div
        className={`text-[16px] text-vte-gray-3 ${
          !noMargin ? 'mb-[20px]' : null
        } ml-[15px] font-apple`}
      >
        {text}
      </div>
    );
  };

  return (
    <>
      <Header isBlack={true} />
      <div className="bg-black text-white pb-[100px]">
        <div className="pt-[7.8125vw] mb-[8vw] font-gmarketBold text-[40px] flex justify-center">
          {t('company.title')}
        </div>
        <CompanyBar year="2012">
          <TextGray text={t('company.2012.1')} noMargin={true} />
          <TextGraySmall text={t('company.2012.2')} noMargin={true} />
          <TextGraySmall text={t('company.2012.3')} />
          <TextGray text={t('company.2012.4')} />
        </CompanyBar>
        <CompanyBar year="2013">
          <TextGray text={t('company.2013.1')} />
          <TextGray text={t('company.2013.2')} />
          <TextGray text={t('company.2013.3')} />
          <TextGray text={t('company.2013.4')} />
          <TextGray text={t('company.2013.5')} />
        </CompanyBar>
        <CompanyBar year="2014">
          <TextGray text={t('company.2014.1')} />
        </CompanyBar>
        <CompanyBar year="2015">
          <TextGray text={t('company.2015.1')} noMargin={true} />
          <TextGraySmall text={t('company.2015.2')} />
        </CompanyBar>
        <CompanyBar year="2017">
          <TextWhite text={t('company.2017.1')} noMargin={true} />
          <TextWhite text={t('company.2017.2')} />
          <TextWhite text={t('company.2017.3')} noMargin={true} />
          <TextWhite text={t('company.2017.4')} />
        </CompanyBar>
        <CompanyBar year="2018">
          <TextGray text={t('company.2018.1')} />
          <TextGray text={t('company.2018.2')} />
          <TextGray text={t('company.2018.3')} />
        </CompanyBar>
        <CompanyBar year="2019">
          <TextGray text={t('company.2019.1')} />
          <TextWhite text={t('company.2019.2')} noMargin={true} />
          <TextWhite text={t('company.2019.3')} />
          <TextGray text={t('company.2019.4')} />
          <TextWhite text={t('company.2019.5')} />
        </CompanyBar>
        <CompanyBar year="2020">
          <TextGray text={t('company.2020.1')} />
          <TextGray text={t('company.2020.2')} />
          <TextGray text={t('company.2020.3')} />
        </CompanyBar>
        <CompanyBar year="2021">
          <TextGray text={t('company.2021.1')} />
          <TextGray text={t('company.2021.2')} />
          <TextGray text={t('company.2021.3')} />
          <TextWhite text={t('company.2021.4')} />
        </CompanyBar>
        <CompanyBar year="2023" end={true}>
          <TextWhite text={t('company.2023.1')} />
          <TextWhite text={t('company.2023.2')} />
          <TextWhite text={t('company.2023.3')} />
          <TextWhite text={t('company.2023.4')} />
          <TextWhite text={t('company.2023.5')} />
        </CompanyBar>
      </div>
    </>
  );
};

export default Company;
