import { TestVTELogo } from '@/assets/TestVTELogo';

export const TestHeader = () => {
  return (
    <div className="h-[68px] flex items-center justify-between border border-transparent border-b-black">
      <TestVTELogo className="ml-[370px] hover:cursor-pointer" />
      <div className="flex mr-[370px] gap-[66px] text-[24px] font-apple text-black">
        <div className="hover:cursor-pointer">COMPANY</div>
        <div className="hover:cursor-pointer">PRODUCTS</div>
        <div className="hover:cursor-pointer">CONTACT</div>
      </div>
    </div>
  );
};
