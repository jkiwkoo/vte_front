type BarProps = {
  start?: boolean;
  end?: boolean;
};

export const Bar = ({ start, end }: BarProps) => {
  return (
    <div className="flex justify-center">
      <div className="mt-[6px] w-[16px] h-[16px] bg-white rounded-full"></div>
      {end ? (
        <div className="absolute border border-white w-0 h-[16px]"></div>
      ) : (
        <div
          className={`absolute border border-white w-0 h-full ${
            start ? 'mt-[6px]' : ''
          }`}
        ></div>
      )}
    </div>
  );
};
