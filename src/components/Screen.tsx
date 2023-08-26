import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';

type ScreenProps = {
  isFocus: number;
  dispatch: Dispatch<SetStateAction<number>>;
};

type ScreenDetailProps = {
  screen: number;
};

export const Screen = ({ isFocus, dispatch }: ScreenProps) => {
  const { t } = useTranslation();

  const UnFocusedScreen = ({ screen }: ScreenDetailProps) => {
    return (
      <div
        className="w-[18.75vw] mt-[7.81vw] ml-[3.125vw] hover:cursor-pointer"
        onClick={() => {
          dispatch(screen);
        }}
      >
        <div className="font-notoSansBold text-white text-[46px] w-min">
          {`0${screen}`}
          <div className="mt-[10px] border-[2px] border-white"></div>
        </div>
        <div className="font-notoSans text-[28px] text-white mt-[25px]">
          {t(`screen.${screen}`)}
        </div>
      </div>
    );
  };

  const FocusedScreen = ({ screen }: ScreenDetailProps) => {
    return (
      <div className="w-[62.5vw] mt-[7.81vw] ml-[3.125vw]">
        <div className="font-notoSansBold text-white text-[46px] w-min">
          {`0${screen}`}
          <div className="mt-[10px] border-[2px] border-white"></div>
        </div>
        <div className="font-notoSans text-[28px] text-white mt-[25px]">
          {t(`screen.${screen}`)}
        </div>
      </div>
    );
  };

  return (
    <div className="h-[980px] bg-vte-blue flex">
      {isFocus === 1 ? (
        <FocusedScreen screen={1} />
      ) : (
        <UnFocusedScreen screen={1} />
      )}
      {isFocus === 2 ? (
        <FocusedScreen screen={2} />
      ) : (
        <UnFocusedScreen screen={2} />
      )}
      {isFocus === 3 ? (
        <FocusedScreen screen={3} />
      ) : (
        <UnFocusedScreen screen={3} />
      )}
    </div>
  );
};
