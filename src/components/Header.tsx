import { VTELogo } from '@/assets/VTELogo';

export const Header = () => {
  return (
    <div className="h-[118px] flex items-center justify-between border border-transparent border-b-black">
      <VTELogo className="ml-[327px] hover:cursor-pointer" />
      <div className="flex mr-[324px] gap-[73px] text-[24px] font-apple text-black">
        <div className="hover:cursor-pointer">COMPANY</div>
        <div className="hover:cursor-pointer">PRODUCTS</div>
        <div className="hover:cursor-pointer">CONTACT</div>
      </div>
    </div>
  );
};
