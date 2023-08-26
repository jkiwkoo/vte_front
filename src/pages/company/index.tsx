import { Bar } from '@/components/Bar';
import { Header } from '@/components/Header';
import { useTranslation } from 'react-i18next';

const Company = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header isBlack={true} />
      <div className="bg-black text-white">
        <div className="pt-[7.8125vw] mb-[8vw] font-gmarketBold text-[40px] flex justify-center">
          {t('company.title')}
        </div>
        <div className="flex pb-[5.3125vw] relative">
          <div className="ml-[26.25vw] font-apple text-[46px]">
            <div>2012</div>
          </div>
          <div className="ml-[5.729vw]">
            <Bar />
          </div>
          <div className="ml-[2.6vw] font-apple">
            <div className="text-[20px]">asdfsdfsdfsdf</div>
            <div className="text-[18px] text-vte-gray-3">asdfsdfgfdgdf</div>
            <div className="text-20px">adfgdfgdfgdfg</div>
          </div>
        </div>
        <div className="flex pb-[5.3125vw] relative">
          <div className="ml-[26.25vw] font-apple text-[46px]">
            <div>2013</div>
          </div>
          <div className="ml-[5.729vw]">
            <Bar />
          </div>
          <div className="ml-[2.6vw] font-apple">
            <div className="text-[20px]">asdfsdfsdfsdf</div>
            <div className="text-[18px] text-vte-gray-3">asdfsdfgfdgdf</div>
            <div className="text-20px">adfgdfgdfgdfg</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
