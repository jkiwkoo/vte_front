import { Header } from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  const [currentProduct, setCurrentProduct] = useState(1);

  return (
    <>
      <Header isBlack={true} />
      <div className="bg-black text-white pb-[100px]">
        <div className="pt-[7.8125vw] mb-[107px] font-gmarketBold text-[40px] flex justify-center">
          {t('products.title')}
        </div>
        <div className="flex flex-col items-center mb-[150px]">
          <div className="grid grid-flow-col justify-between items-center w-[41.615vw] text-[20px] font-apple">
            <div className="flex flex-col items-center">
              <div
                className={`w-[120px] flex justify-center ${
                  currentProduct === 1
                    ? 'text-white'
                    : 'text-vte-gray-6 hover:cursor-pointer hover:text-white'
                }`}
                onClick={() => {
                  setCurrentProduct(1);
                }}
              >
                {t('glass.1.title')}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-[120px] flex justify-center ${
                  currentProduct === 2
                    ? 'text-white'
                    : 'text-vte-gray-6 hover:cursor-pointer hover:text-white'
                }`}
                onClick={() => {
                  setCurrentProduct(2);
                }}
              >
                {t('glass.2.title')}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-[120px] flex justify-center ${
                  currentProduct === 3
                    ? 'text-white'
                    : 'text-vte-gray-6 hover:cursor-pointer hover:text-white'
                }`}
                onClick={() => {
                  setCurrentProduct(3);
                }}
              >
                {t('glass.3.title')}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-[120px] flex justify-center ${
                  currentProduct === 4
                    ? 'text-white'
                    : 'text-vte-gray-6 hover:cursor-pointer hover:text-white'
                }`}
                onClick={() => {
                  setCurrentProduct(4);
                }}
              >
                {t('glass.4.title')}
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col justify-between items-center w-[41.615vw]">
            <div className="w-[120px] flex justify-center">
              <div className="w-[33px] h-[33[px] flex items-center justify-center">
                {currentProduct === 1 ? (
                  <Image
                    src="/images/FocusedProduct.png"
                    alt="dot"
                    width={33}
                    height={33}
                  />
                ) : (
                  <Image
                    src="/images/UnFocusedProduct.png"
                    alt="dot"
                    width={13}
                    height={13}
                  />
                )}
              </div>
            </div>
            <div className="w-[120px] flex justify-center">
              <div className="w-[33px] h-[33[px] flex items-center justify-center">
                {currentProduct === 2 ? (
                  <Image
                    src="/images/FocusedProduct.png"
                    alt="dot"
                    width={33}
                    height={33}
                  />
                ) : (
                  <Image
                    src="/images/UnFocusedProduct.png"
                    alt="dot"
                    width={13}
                    height={13}
                  />
                )}
              </div>
            </div>
            <div className="w-[120px] flex justify-center">
              <div className="w-[33px] h-[33[px] flex items-center justify-center">
                {currentProduct === 3 ? (
                  <Image
                    src="/images/FocusedProduct.png"
                    alt="dot"
                    width={33}
                    height={33}
                  />
                ) : (
                  <Image
                    src="/images/UnFocusedProduct.png"
                    alt="dot"
                    width={13}
                    height={13}
                  />
                )}
              </div>
            </div>
            <div className="w-[120px] flex justify-center">
              <div className="w-[33px] h-[33[px] flex items-center justify-center">
                {currentProduct === 4 ? (
                  <Image
                    src="/images/FocusedProduct.png"
                    alt="dot"
                    width={33}
                    height={33}
                  />
                ) : (
                  <Image
                    src="/images/UnFocusedProduct.png"
                    alt="dot"
                    width={13}
                    height={13}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-[77.344vw] h-[36.927vw] relative mr-[22.657vw]">
            <Image
              src="/images/ProductBg1.png"
              alt="product"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
