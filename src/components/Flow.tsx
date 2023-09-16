import { useTranslation } from 'react-i18next';
import { FlowImage } from './FlowImage';

export const Flow = () => {
  const { t } = useTranslation();

  return (
    <div className="h-[51.04vw] bg-vte-blue-4">
      <div className="flex flex-col items-center">
        <div className="pt-[4vw] font-notoSans text-white text-[36px]">
          {t('flow.title')}
        </div>
        <div className="mt-[24px] mb-[8vw] font-notoSans text-vte-light-blue text-[21px] flex flex-col items-center justify-center">
          <div>{t('flow.subTitle')}</div>
          <div>{t('flow.subTitle2')}</div>
        </div>
      </div>
      <div className="flex justify-center items-start text-white gap-[50px]">
        <FlowImage flow={1} width={90} height={76} />
        <FlowImage flow={2} width={117} height={83} />
        <FlowImage flow={3} width={92} height={84} />
        <FlowImage flow={4} width={84} height={83} />
      </div>
      <div className="flex justify-center items-center text-white gap-[50px]">
        <FlowImage flow={8} width={109} height={73} />
        <FlowImage flow={7} width={89} height={82} />
        <FlowImage flow={6} width={101} height={83} />
        <FlowImage flow={5} width={98} height={92} />
      </div>
    </div>
  );
};
