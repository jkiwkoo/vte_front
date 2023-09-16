import { AnimatedText } from '@/components/AnimatedText';
import { CompanyBar } from '@/components/CompanyBar';
import { Header } from '@/components/Header';
import { useTranslation } from 'react-i18next';

const Company = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header isBlack={true} />
      <div className="bg-black text-white pb-[100px]">
        <div className="pt-[7.8125vw] mb-[8vw] font-gmarketBold text-[40px] flex justify-center">
          {t('company.title')}
        </div>
        <CompanyBar year="2012">
          <AnimatedText isGray noMargin text={t('company.2012.1')} />
          <AnimatedText
            isGray
            isSmall
            noMargin
            smallTab
            text={t('company.2012.2')}
          />
          <AnimatedText isGray isSmall smallTab text={t('company.2012.3')} />
          <AnimatedText isGray text={t('company.2012.4')} />
        </CompanyBar>
        <CompanyBar year="2013">
          <AnimatedText isGray text={t('company.2013.1')} />
          <AnimatedText isGray text={t('company.2013.2')} />
          <AnimatedText isGray text={t('company.2013.3')} />
          <AnimatedText isGray text={t('company.2013.4')} />
          <AnimatedText isGray text={t('company.2013.5')} />
        </CompanyBar>
        <CompanyBar year="2014">
          <AnimatedText isGray text={t('company.2014.1')} />
        </CompanyBar>
        <CompanyBar year="2015">
          <AnimatedText isGray noMargin text={t('company.2015.1')} />
          <AnimatedText isGray isSmall smallTab text={t('company.2015.2')} />
        </CompanyBar>
        <CompanyBar year="2017">
          <AnimatedText noMargin text={t('company.2017.1')} />
          <AnimatedText tab text={t('company.2017.2')} />
          <AnimatedText noMargin text={t('company.2017.3')} />
          <AnimatedText tab text={t('company.2017.4')} />
        </CompanyBar>
        <CompanyBar year="2018">
          <AnimatedText isGray text={t('company.2018.1')} />
          <AnimatedText isGray text={t('company.2018.2')} />
          <AnimatedText isGray text={t('company.2018.3')} />
        </CompanyBar>
        <CompanyBar year="2019">
          <AnimatedText isGray text={t('company.2019.1')} />
          <AnimatedText noMargin text={t('company.2019.2')} />
          <AnimatedText tab text={t('company.2019.3')} />
          <AnimatedText isGray text={t('company.2019.4')} />
          <AnimatedText text={t('company.2019.5')} />
        </CompanyBar>
        <CompanyBar year="2020">
          <AnimatedText isGray text={t('company.2020.1')} />
          <AnimatedText isGray text={t('company.2020.2')} />
          <AnimatedText isGray text={t('company.2020.3')} />
        </CompanyBar>
        <CompanyBar year="2021">
          <AnimatedText isGray text={t('company.2021.1')} />
          <AnimatedText isGray text={t('company.2021.2')} />
          <AnimatedText isGray text={t('company.2021.3')} />
          <AnimatedText text={t('company.2021.4')} />
        </CompanyBar>
        <CompanyBar year="2023" end={true}>
          <AnimatedText text={t('company.2023.1')} />
          <AnimatedText text={t('company.2023.2')} />
          <AnimatedText text={t('company.2023.3')} />
          <AnimatedText text={t('company.2023.4')} />
          <AnimatedText text={t('company.2023.5')} />
        </CompanyBar>
      </div>
    </>
  );
};

export default Company;
