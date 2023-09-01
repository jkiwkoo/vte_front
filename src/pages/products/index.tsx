import { Header } from '@/components/Header';
import { Observer } from '@/components/Observer';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  const [currentProduct, setCurrentProduct] = useState(1);

  const [catch0, setCatch0] = useState(false);
  const [catch1, setCatch1] = useState(false);
  const [catch2, setCatch2] = useState(false);
  const [catch3, setCatch3] = useState(false);
  const [catch4, setCatch4] = useState(false);
  const [catch5, setCatch5] = useState(false);
  const [catch6, setCatch6] = useState(false);
  const [catch7, setCatch7] = useState(false);
  const [catch8, setCatch8] = useState(false);
  const [catch9, setCatch9] = useState(false);

  const right880 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'ml-[880px]'
      : catch8
      ? 'ml-[792px]'
      : catch7
      ? 'ml-[704px]'
      : catch6
      ? 'ml-[616px]'
      : catch5
      ? 'ml-[528px]'
      : catch4
      ? 'ml-[440px]'
      : catch3
      ? 'ml-[352px]'
      : catch2
      ? 'ml-[264px]'
      : catch1
      ? 'ml-[176px]'
      : catch0
      ? 'ml-[88px]'
      : ''
  }`;

  const right480 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'ml-[480px]'
      : catch8
      ? 'ml-[432px]'
      : catch7
      ? 'ml-[384px]'
      : catch6
      ? 'ml-[336px]'
      : catch5
      ? 'ml-[288px]'
      : catch4
      ? 'ml-[240px]'
      : catch3
      ? 'ml-[192px]'
      : catch2
      ? 'ml-[144px]'
      : catch1
      ? 'ml-[96px]'
      : catch0
      ? 'ml-[48px]'
      : ''
  }`;

  const right130 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'ml-[130px]'
      : catch8
      ? 'ml-[117px]'
      : catch7
      ? 'ml-[104px]'
      : catch6
      ? 'ml-[91px]'
      : catch5
      ? 'ml-[78px]'
      : catch4
      ? 'ml-[65px]'
      : catch3
      ? 'ml-[52px]'
      : catch2
      ? 'ml-[39px]'
      : catch1
      ? 'ml-[26px]'
      : catch0
      ? 'ml-[13px]'
      : ''
  }`;

  const left880 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mr-[880px]'
      : catch8
      ? 'mr-[792px]'
      : catch7
      ? 'mr-[704px]'
      : catch6
      ? 'mr-[616px]'
      : catch5
      ? 'mr-[528px]'
      : catch4
      ? 'mr-[440px]'
      : catch3
      ? 'mr-[352px]'
      : catch2
      ? 'mr-[264px]'
      : catch1
      ? 'mr-[176px]'
      : catch0
      ? 'mr-[88px]'
      : ''
  }`;

  const left480 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mr-[480px]'
      : catch8
      ? 'mr-[432px]'
      : catch7
      ? 'mr-[384px]'
      : catch6
      ? 'mr-[336px]'
      : catch5
      ? 'mr-[288px]'
      : catch4
      ? 'mr-[240px]'
      : catch3
      ? 'mr-[192px]'
      : catch2
      ? 'mr-[144px]'
      : catch1
      ? 'mr-[96px]'
      : catch0
      ? 'mr-[48px]'
      : ''
  }`;

  const left130 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mr-[130px]'
      : catch8
      ? 'mr-[117px]'
      : catch7
      ? 'mr-[104px]'
      : catch6
      ? 'mr-[91px]'
      : catch5
      ? 'mr-[78px]'
      : catch4
      ? 'mr-[65px]'
      : catch3
      ? 'mr-[52px]'
      : catch2
      ? 'mr-[39px]'
      : catch1
      ? 'mr-[26px]'
      : catch0
      ? 'mr-[13px]'
      : ''
  }`;

  const bottom600 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mt-[600px]'
      : catch8
      ? 'mt-[540px]'
      : catch7
      ? 'mt-[480px]'
      : catch6
      ? 'mt-[420px]'
      : catch5
      ? 'mt-[360px]'
      : catch4
      ? 'mt-[300px]'
      : catch3
      ? 'mt-[240px]'
      : catch2
      ? 'mt-[180px]'
      : catch1
      ? 'mt-[120px]'
      : catch0
      ? 'mt-[60px]'
      : ''
  }`;

  const bottom300 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mt-[300px]'
      : catch8
      ? 'mt-[270px]'
      : catch7
      ? 'mt-[240px]'
      : catch6
      ? 'mt-[210px]'
      : catch5
      ? 'mt-[180px]'
      : catch4
      ? 'mt-[150px]'
      : catch3
      ? 'mt-[120px]'
      : catch2
      ? 'mt-[90px]'
      : catch1
      ? 'mt-[60px]'
      : catch0
      ? 'mt-[30px]'
      : ''
  }`;

  const top600 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mb-[600px]'
      : catch8
      ? 'mb-[540px]'
      : catch7
      ? 'mb-[480px]'
      : catch6
      ? 'mb-[420px]'
      : catch5
      ? 'mb-[360px]'
      : catch4
      ? 'mb-[300px]'
      : catch3
      ? 'mb-[240px]'
      : catch2
      ? 'mb-[180px]'
      : catch1
      ? 'mb-[120px]'
      : catch0
      ? 'mb-[60px]'
      : ''
  }`;

  const top300 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mb-[300px]'
      : catch8
      ? 'mb-[270px]'
      : catch7
      ? 'mb-[240px]'
      : catch6
      ? 'mb-[210px]'
      : catch5
      ? 'mb-[180px]'
      : catch4
      ? 'mb-[150px]'
      : catch3
      ? 'mb-[120px]'
      : catch2
      ? 'mb-[90px]'
      : catch1
      ? 'mb-[60px]'
      : catch0
      ? 'mb-[30px]'
      : ''
  }`;

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
        {currentProduct === 1 ? (
          <div className="w-[77.344vw] h-[36.927vw] relative mr-[22.657vw] animate-fade-in-left">
            <Image
              src="/images/ProductBg1.png"
              alt="product"
              fill
              quality={100}
            />
          </div>
        ) : null}
        {currentProduct === 2 ? (
          <div className="w-[32.4vw] h-[49vw] relative ml-[13.6vw] animate-fade-in-left">
            <Image
              src="/images/ProductBg2.png"
              alt="product"
              fill
              quality={100}
            />
            <div className="pt-[24vw]">
              <div className="w-[32.4vw] h-[25vw] relative">
                <Image
                  src="/images/ProductBg2Sub.png"
                  alt="productSub"
                  fill
                  quality={100}
                />
              </div>
            </div>
          </div>
        ) : null}
        {currentProduct === 3 ? (
          <div className="w-[77.92vw] h-[40.83vw] relative ml-[14.1vw] animate-fade-in-left">
            <Image
              src="/images/ProductBg3.png"
              alt="product"
              fill
              quality={100}
            />
          </div>
        ) : null}
        {currentProduct === 4 ? (
          <div className="w-[63.9vw] h-[42.66vw] relative ml-[12.6vw] animate-fade-in-left">
            <Image
              src="/images/ProductBg4.png"
              alt="product"
              fill
              quality={100}
            />
          </div>
        ) : null}
        <div className="h-[1200px] flex justify-center items-center">
          <div className="flex flex-col items-center justify-between h-full w-full pt-[500px] pb-[200px]">
            <Observer dispatch={setCatch0} />
            <Observer dispatch={setCatch1} />
            <Observer dispatch={setCatch2} />
            <Observer dispatch={setCatch3} />
            <Observer dispatch={setCatch4} />
            <Observer dispatch={setCatch5} />
            <Observer dispatch={setCatch6} />
            <Observer dispatch={setCatch7} />
            <Observer dispatch={setCatch8} />
            <Observer dispatch={setCatch9} />
          </div>
          {currentProduct === 1 ? (
            <>
              <div className={left130}>
                <Image
                  className="mr-[44px] z-10"
                  src="/images/Product1_3.png"
                  alt="product"
                  width={44}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={left480}>
                <Image
                  className="mr-[69px] z-20"
                  src="/images/Product1_2.png"
                  alt="product"
                  width={69}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={left880}>
                <Image
                  className="mr-[128px] z-30"
                  src="/images/Product1_1.png"
                  alt="product"
                  width={59}
                  height={303}
                  quality={100}
                />
              </div>
              <div className={right130}>
                <Image
                  className="ml-[44px] z-10"
                  src="/images/Product1_4.png"
                  alt="product"
                  width={44}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={right480}>
                <Image
                  className="ml-[69px] z-20"
                  src="/images/Product1_5.png"
                  alt="product"
                  width={69}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={right880}>
                <Image
                  className="ml-[128px] z-30"
                  src="/images/Product1_6.png"
                  alt="product"
                  width={59}
                  height={303}
                  quality={100}
                />
              </div>
            </>
          ) : null}
          {currentProduct === 2 ? (
            <>
              <div className={`${left880} ${top600}`}>
                <Image
                  className="z-10"
                  src="/images/Product2_1.png"
                  alt="product"
                  width={242}
                  height={588}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${left480} ${top300}`}>
                <Image
                  className="z-20"
                  src="/images/Product2_2.png"
                  alt="product"
                  width={299}
                  height={620}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute">
                <Image
                  className="z-30"
                  src="/images/Product2_3.png"
                  alt="product"
                  width={267}
                  height={610}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${right480} ${bottom300}`}>
                <Image
                  className="z-40"
                  src="/images/Product2_4.png"
                  alt="product"
                  width={253}
                  height={611}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${right880} ${bottom600}`}>
                <Image
                  className="z-50"
                  src="/images/Product2_5.png"
                  alt="product"
                  width={295}
                  height={611}
                  quality={100}
                  priority
                />
              </div>
            </>
          ) : null}
          {currentProduct === 3 ? (
            <>
              <div className={`${right880} ${top600}`}>
                <Image
                  className="z-10"
                  src="/images/Product3_5.png"
                  alt="product"
                  width={747}
                  height={360}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${right480} ${top300}`}>
                <Image
                  className="z-20"
                  src="/images/Product3_4.png"
                  alt="product"
                  width={747}
                  height={360}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute">
                <Image
                  className="z-30"
                  src="/images/Product3_3.png"
                  alt="product"
                  width={747}
                  height={360}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${left480} ${bottom300}`}>
                <Image
                  className="z-40"
                  src="/images/Product3_2.png"
                  alt="product"
                  width={747}
                  height={360}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${left880} ${bottom600}`}>
                <Image
                  className="z-50"
                  src="/images/Product3_1.png"
                  alt="product"
                  width={747}
                  height={360}
                  quality={100}
                  priority
                />
              </div>
            </>
          ) : null}
          {currentProduct === 4 ? (
            <>
              <div className={`${right880} ${top600}`}>
                <Image
                  className="z-10 mr-[400px] mt-[200px]"
                  src="/images/Product4_3.png"
                  alt="product"
                  width={513}
                  height={529}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${right480} ${top300}`}>
                <Image
                  className="z-20 mr-[400px] mt-[200px]"
                  src="/images/Product4_2.png"
                  alt="product"
                  width={513}
                  height={529}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute">
                <Image
                  className="z-30 mr-[400px] mt-[200px]"
                  src="/images/Product4_1.png"
                  alt="product"
                  width={513}
                  height={529}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute">
                <Image
                  className="z-30 mr-[600px] mt-[400px]"
                  src="/images/Product4Sub.png"
                  alt="product"
                  width={582}
                  height={605}
                  quality={100}
                  priority
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Products;
