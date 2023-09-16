import Image from 'next/image';

export const Contact = () => {
  return (
    <div
      className="z-50 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center hover:cursor-pointer fixed bottom-[100px] right-[150px]"
      onClick={() => {
        window.open('https://pf.kakao.com/_yxjsAG/chat');
      }}
    >
      <Image
        src={`/images/Contact.png`}
        alt="contact"
        width={49}
        height={48}
        priority
      />
    </div>
  );
};
