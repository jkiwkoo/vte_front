import { Bar } from '@/components/Bar';
import { ReactNode } from 'react';

type CompanyBarProps = {
  year: string;
  children: ReactNode;
  end?: boolean;
};

export const CompanyBar = ({ year, children, end }: CompanyBarProps) => {
  return (
    <div className="flex pb-[5.3125vw] relative">
      <div className="ml-[26.25vw] font-apple text-[46px] w-[100px]">
        <div>{year}</div>
      </div>
      <div className="ml-[5.729vw] mt-[13px]">
        <Bar end={end} />
      </div>
      <div className="ml-[2.6vw] mt-[13px] font-apple">{children}</div>
    </div>
  );
};
