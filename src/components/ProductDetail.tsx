import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

type ProductDetailProps = {
  product: number;
};

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { t } = useTranslation();

  const Description = ({ product }: ProductDetailProps) => {
    const lineMap = [7, 5, 5, 4];
    const description: Array<ReactNode> = [];

    for (let i = 0; i < lineMap[product - 1]; i++) {
      description.push(
        <>
          <div className="text-[20px]">
            {t(`products.${product}.description.${i + 1}`)}
          </div>
        </>,
      );
    }

    return description;
  };

  const Description2 = ({ product }: ProductDetailProps) => {
    const lineMap = [5, 2, 2, 4];
    const description: Array<ReactNode> = [];

    for (let i = 0; i < lineMap[product - 1]; i++) {
      description.push(
        <>
          <div className="text-[20px]">
            {t(`products.${product}.description2.${i + 1}`)}
          </div>
        </>,
      );
    }

    return description;
  };

  const Title = ({ product }: ProductDetailProps) => {
    const lineMap = [1, 2, 1, 1];
    const title: Array<ReactNode> = [];

    for (let i = 0; i < lineMap[product - 1]; i++) {
      title.push(
        <>
          <div className="text-[30px] font-bold uppercase">
            {t(`products.${product}.title.${i + 1}`)}
          </div>
        </>,
      );
    }

    return title;
  };

  const Title2 = ({ product }: ProductDetailProps) => {
    const lineMap = [1, 2, 2, 2];
    const title: Array<ReactNode> = [];

    for (let i = 0; i < lineMap[product - 1]; i++) {
      title.push(
        <>
          <div className="text-[30px] font-bold uppercase">
            {t(`products.${product}.title2.${i + 1}`)}
          </div>
        </>,
      );
    }

    return title;
  };

  return (
    <>
      <div className="bg-black flex gap-[50px] items-center justify-center pb-[250px]">
        <div className="relative w-[33.8vw] h-[24.062vw]">
          <Image
            src={`/images/Product${product}Detail.png`}
            fill
            alt="ProductDetail"
            priority
            quality={100}
          />
        </div>
        <div className="w-[33.8vw] h-[24.062vw] text-white flex flex-col items-start justify-end font-notoSans">
          <Title product={product} />
          <div className="mb-[36px]"></div>
          <Description product={product} />
        </div>
      </div>
      <div className="bg-black flex gap-[50px] items-center justify-center pb-[250px]">
        <div className="w-[33.8vw] h-[24.062vw] text-white flex flex-col items-start justify-end font-notoSans">
          <Title2 product={product} />
          <div className="mb-[36px]"></div>
          <Description2 product={product} />
        </div>
        <div className="relative w-[33.8vw] h-[24.062vw]">
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
