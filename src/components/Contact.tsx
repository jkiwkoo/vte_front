import Image from 'next/image';

export const Contact = () => {
  return (
    <div
      className="z-30 w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center hover:cursor-pointer fixed bottom-[50px] right-[110px]"
      onClick={() => {
        window.open('https://pf.kakao.com/_yxjsAG/chat');
      }}
    >
      <Image src={`/images/Contact.png`} alt="contact" width={73} height={72} />
    </div>
  );
};
