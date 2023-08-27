type LineProps = {
  virtualWidth: string;
  end?: boolean;
};

export const Line = ({ virtualWidth, end }: LineProps) => {
  return (
    <div
      className={`w-[${virtualWidth}vw] border border-transparent ${
        end ? 'border-t-white' : 'border-b-white'
      }`}
    ></div>
  );
};
