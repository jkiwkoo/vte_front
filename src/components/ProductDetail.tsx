import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type ProductDetailProps = {
  product: number;
};

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-black flex gap-[50px] items-center justify-center pb-[250px]">
        <div className="relative w-[30.73vw] h-[21.875vw]">
          <Image
            src={`/images/Product${product}Detail.png`}
            fill
            alt="ProductDetail"
            priority
            quality={100}
          />
        </div>
        <div className="w-[30.73vw] h-[21.875vw] text-white flex flex-col items-start justify-end font-notoSans px-[2vw]">
          <div className="text-[30px] mb-[36px] font-bold uppercase ">
            {t(`products.${product}.title`)}
          </div>
          <div className="text-[20px]">
            {t(`products.${product}.description`)}
          </div>
        </div>
      </div>
      <div className="bg-black flex gap-[50px] items-center justify-center pb-[250px]">
        <div className="w-[30.73vw] h-[21.875vw] text-white flex flex-col items-start justify-end font-notoSans px-[2vw]">
          <div className="text-[30px] mb-[36px] font-bold uppercase ">
            {t(`products.${product}.title2`)}
          </div>
          <div className="text-[20px]">
            {t(`products.${product}.description2`)}
          </div>
        </div>
        <div className="relative w-[30.73vw] h-[21.875vw]">
          <Image
            src={`/images/Product${product}Detail2.png`}
            fill
            alt="ProductDetail"
            priority
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
