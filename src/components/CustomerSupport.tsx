import { useTranslation } from 'react-i18next';

export const CustomerSupport = () => {
  const { t } = useTranslation();

  type SupportDetailProps = {
    method: string;
    title: string;
    url: string;
  };

  type LineProps = {
    end?: boolean;
  };

  const SupportDetail = ({ method, title, url }: SupportDetailProps) => {
    return (
      <>
        <div className="w-[62.5vw] flex justify-between text-white text-[18px] font-apple h-[78px]">
          <div className="flex ml-[3.125vw] items-center">
            <div className="bg-vte-gray-5 rounded-[10px] h-[36px] w-[73px] flex justify-center items-center">
              {method}
            </div>
            <div className="ml-[26px]">{title}</div>
          </div>
          <a
            className="flex mr-[3.125vw] items-center hover:cursor-pointer no-underline hover:underline underline-white"
            href={url}
          >
            {t('word.download')}
          </a>
        </div>
        <Line />
      </>
    );
  };

  const Line = ({ end }: LineProps) => {
    return (
      <div
        className={`w-[62.5vw] border border-transparent ${
          end ? 'border-t-white' : 'border-b-white'
        }`}
      ></div>
    );
  };

  return (
    <div className="w-[62.5vw] h-[100vh]">
      <Line />
      <Line end />
      <SupportDetail method="자료" title="FOO" url="" />
      <SupportDetail method="견적" title="BAR" url="" />
      <SupportDetail method="견적" title="BAZ" url="" />
      <Line end />
    </div>
  );
};
