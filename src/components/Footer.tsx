import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[230px] bg-black py-[36px] text-vte-gray-7 text-[12px] font-notoSans flex flex-col items-center justify-center">
      <div className="flex gap-[35px]">
        <div
          className="w-[21px] h-[21px] hover:cursor-pointer"
          onClick={() => {
            window.open(
              'https://www.facebook.com/profile.php?id=100091921937709',
            );
          }}
        >
          <Image
            src={'/images/Facebook.png'}
            width={10}
            height={21}
            alt="Facebook"
          />
        </div>
        <div
          className="w-[21px] h-[21px] hover:cursor-pointer"
          onClick={() => {
            window.open('https://instagram.com/vtecorp');
          }}
        >
          <Image
            src={'/images/Instagram.png'}
            width={21}
            height={21}
            alt="Instagram"
          />
        </div>
        <div
          className="ml-[5px] w-[21px] h-[21px] hover:cursor-pointer"
          onClick={() => {
            window.open('https://blog.naver.com/vtecorp');
          }}
        >
          <Image src={'/images/Blog.png'} width={21} height={19} alt="Blog" />
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="flex items-center justify-center gap-[20px]">
          <div className="flex">
            <div className="font-bold">{t('word.tel')}</div>
            <div>{t('footer.tel')}</div>
          </div>
          <div className="flex">
            <div className="font-bold">{t('word.fax')}</div>
            <div>{t('footer.fax')}</div>
          </div>
        </div>
        <div className="mt-[7px]">
          <div className="flex items-center justify-center gap-[4px]">
            <div className="font-bold">{t('word.korea')}</div>
            <div>{t('footer.korea')}</div>
          </div>
        </div>
        <div className="mt-[3px]">
          <div className="flex items-center justify-center gap-[4px]">
            <div className="font-bold">{t('word.china')}</div>
            <div>{t('footer.china')}</div>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">{t('footer.copyright')}</div>
    </div>
  );
};
