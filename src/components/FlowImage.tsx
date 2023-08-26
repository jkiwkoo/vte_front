import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type FlowImageProps = {
  flow: number;
  width: number;
  height: number;
};

export const FlowImage = ({ flow, width, height }: FlowImageProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-[50px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-[170px]">
          <div className="w-[120px] h-[95px] flex items-center justify-center">
            <Image
              src={`/images/FlowImage${flow}.png`}
              alt="flow"
              width={width}
              height={height}
            />
          </div>
          <div className="h-[55px] flex flex-col items-center justify-center">
            <div className="mt-[30px] font-notoSans text-white text-18px">
              {t(`flow.${flow}`)}
            </div>
            {flow === 6 ? (
              <div className="font-notoSans text-white text-18px">
                {t(`flow.${flow}sub`)}
              </div>
            ) : null}
          </div>
        </div>
        {flow === 4 ? (
          <Image
            className="my-[70px]"
            src={`/images/Down.png`}
            alt="down"
            width={18}
            height={16}
          />
        ) : null}
      </div>
      {flow === 1 || flow === 2 || flow === 3 ? (
        <Image
          className="self-center"
          src={`/images/Right.png`}
          alt="right"
          width={15}
          height={20}
        />
      ) : null}
      {flow === 6 || flow === 7 || flow === 8 ? (
        <Image
          className="self-center"
          src={`/images/Left.png`}
          alt="right"
          width={16}
          height={18}
        />
      ) : null}
    </div>
  );
};
