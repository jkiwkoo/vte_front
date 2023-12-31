import { TestHeader } from '@/components/TestHeader';
import Image from 'next/image';

const TestHome = () => {
  return (
    <>
      <TestHeader />
      <div className="flex flex-col items-center">
        <div className="mt-[231px] w-[446px] h-[235px] flex items-center justify-center">
          <Image
            className="absolute ml-[433px] mb-[222px]"
            src="/images/MainBannerTail.png"
            alt="test2"
            width={183}
            height={183}
          />
          <Image
            className="absolute"
            src="/images/MainBanner.png"
            alt="test"
            width={446}
            height={235}
          />
          <div
            className={`text-[46px] flex flex-col items-center justify-center text-center font-gmarketBold leading-[56px] text-black`}
          >
            <div>Website</div>
            <div>Under</div>
            <div>Construction</div>
          </div>
        </div>
        <div className="text-vte-gray text-[21px] mt-[30px]">
          We’re busy updating our website for you and will be back soon
        </div>
        <div
          className="w-[193px] h-[45px] bg-black hover:bg-opacity-80 hover:cursor-pointer rounded-[30px] text-[24px] text-white flex items-center text-center justify-center mt-[65px]"
          onClick={() => {
            window.open('https://pf.kakao.com/_yxjsAG/chat');
          }}
        >
          <div className="pt-1 font-gmarketBold text-white">CONTACT</div>
          <Image
            className="absolute ml-[260px] mt-[20px]"
            src="/images/Mouse.png"
            alt="mouse"
            width={31}
            height={40}
          />
        </div>
      </div>
    </>
  );
};

export default TestHome;
