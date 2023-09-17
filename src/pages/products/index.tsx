import { Header } from '@/components/Header';
import { Observer } from '@/components/Observer';
import { ProductDetail } from '@/components/ProductDetail';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    router.query?.product ? setCurrentProduct(+router.query?.product) : null;
  }, []);

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

  const [pageCatch, setPageCatch] = useState(false);

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

  const right700 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'ml-[700px]'
      : catch8
      ? 'ml-[630px]'
      : catch7
      ? 'ml-[560px]'
      : catch6
      ? 'ml-[490px]'
      : catch5
      ? 'ml-[420px]'
      : catch4
      ? 'ml-[350px]'
      : catch3
      ? 'ml-[280px]'
      : catch2
      ? 'ml-[210px]'
      : catch1
      ? 'ml-[140px]'
      : catch0
      ? 'ml-[70px]'
      : ''
  }`;

  const right600 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'ml-[600px]'
      : catch8
      ? 'ml-[540px]'
      : catch7
      ? 'ml-[480px]'
      : catch6
      ? 'ml-[420px]'
      : catch5
      ? 'ml-[360px]'
      : catch4
      ? 'ml-[300px]'
      : catch3
      ? 'ml-[240px]'
      : catch2
      ? 'ml-[180px]'
      : catch1
      ? 'ml-[120px]'
      : catch0
      ? 'ml-[60px]'
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

  const right300 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'ml-[300px]'
      : catch8
      ? 'ml-[270px]'
      : catch7
      ? 'ml-[240px]'
      : catch6
      ? 'ml-[210px]'
      : catch5
      ? 'ml-[180px]'
      : catch4
      ? 'ml-[150px]'
      : catch3
      ? 'ml-[120px]'
      : catch2
      ? 'ml-[90px]'
      : catch1
      ? 'ml-[60px]'
      : catch0
      ? 'ml-[30px]'
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

  const left700 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mr-[700px]'
      : catch8
      ? 'mr-[630px]'
      : catch7
      ? 'mr-[560px]'
      : catch6
      ? 'mr-[490px]'
      : catch5
      ? 'mr-[420px]'
      : catch4
      ? 'mr-[350px]'
      : catch3
      ? 'mr-[280px]'
      : catch2
      ? 'mr-[210px]'
      : catch1
      ? 'mr-[140px]'
      : catch0
      ? 'mr-[70px]'
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

  const left300 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mr-[300px]'
      : catch8
      ? 'mr-[270px]'
      : catch7
      ? 'mr-[240px]'
      : catch6
      ? 'mr-[210px]'
      : catch5
      ? 'mr-[180px]'
      : catch4
      ? 'mr-[150px]'
      : catch3
      ? 'mr-[120px]'
      : catch2
      ? 'mr-[90px]'
      : catch1
      ? 'mr-[60px]'
      : catch0
      ? 'mr-[30px]'
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

  const bottom400 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mt-[400px]'
      : catch8
      ? 'mt-[360px]'
      : catch7
      ? 'mt-[320px]'
      : catch6
      ? 'mt-[280px]'
      : catch5
      ? 'mt-[240px]'
      : catch4
      ? 'mt-[200px]'
      : catch3
      ? 'mt-[160px]'
      : catch2
      ? 'mt-[120px]'
      : catch1
      ? 'mt-[80px]'
      : catch0
      ? 'mt-[40px]'
      : ''
  }`;

  const bottom200 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mt-[200px]'
      : catch8
      ? 'mt-[180px]'
      : catch7
      ? 'mt-[160px]'
      : catch6
      ? 'mt-[140px]'
      : catch5
      ? 'mt-[120px]'
      : catch4
      ? 'mt-[100px]'
      : catch3
      ? 'mt-[80px]'
      : catch2
      ? 'mt-[60px]'
      : catch1
      ? 'mt-[40px]'
      : catch0
      ? 'mt-[20px]'
      : ''
  }`;

  const bottom100 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mt-[100px]'
      : catch8
      ? 'mt-[90px]'
      : catch7
      ? 'mt-[80px]'
      : catch6
      ? 'mt-[70px]'
      : catch5
      ? 'mt-[60px]'
      : catch4
      ? 'mt-[50px]'
      : catch3
      ? 'mt-[40px]'
      : catch2
      ? 'mt-[30px]'
      : catch1
      ? 'mt-[20px]'
      : catch0
      ? 'mt-[10px]'
      : ''
  }`;

  const top400 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mb-[400px]'
      : catch8
      ? 'mb-[360px]'
      : catch7
      ? 'mb-[320px]'
      : catch6
      ? 'mb-[280px]'
      : catch5
      ? 'mb-[240px]'
      : catch4
      ? 'mb-[200px]'
      : catch3
      ? 'mb-[160px]'
      : catch2
      ? 'mb-[120px]'
      : catch1
      ? 'mb-[80px]'
      : catch0
      ? 'mb-[40px]'
      : ''
  }`;

  const top200 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mb-[200px]'
      : catch8
      ? 'mb-[180px]'
      : catch7
      ? 'mb-[160px]'
      : catch6
      ? 'mb-[140px]'
      : catch5
      ? 'mb-[120px]'
      : catch4
      ? 'mb-[100px]'
      : catch3
      ? 'mb-[80px]'
      : catch2
      ? 'mb-[60px]'
      : catch1
      ? 'mb-[40px]'
      : catch0
      ? 'mb-[20px]'
      : ''
  }`;

  const top100 = `absolute delay-75 transition-all duration-1000 ${
    catch9
      ? 'mb-[100px]'
      : catch8
      ? 'mb-[90px]'
      : catch7
      ? 'mb-[80px]'
      : catch6
      ? 'mb-[70px]'
      : catch5
      ? 'mb-[60px]'
      : catch4
      ? 'mb-[50px]'
      : catch3
      ? 'mb-[40px]'
      : catch2
      ? 'mb-[30px]'
      : catch1
      ? 'mb-[20px]'
      : catch0
      ? 'mb-[10px]'
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
            <div
              className="group"
              onClick={() => {
                setCurrentProduct(1);
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-[160px] flex justify-center ${
                    currentProduct === 1
                      ? 'text-white'
                      : 'text-vte-gray-6 hover:cursor-pointer group-hover:text-white'
                  }`}
                >
                  {t('glass.1.title')}
                </div>
              </div>
              <div className="w-[160px] flex justify-center">
                <div className="w-[33px] h-[33px] flex items-center justify-center">
                  {currentProduct === 1 ? (
                    <Image
                      src="/images/FocusedProduct.png"
                      alt="dot"
                      width={33}
                      height={33}
                    />
                  ) : (
                    <>
                      <div className="absolute visible group-hover:invisible">
                        <Image
                          src="/images/UnFocusedProduct.png"
                          alt="dot"
                          width={13}
                          height={13}
                        />
                      </div>
                      <div className="absolute invisible group-hover:visible">
                        <Image
                          src="/images/FocusedProduct.png"
                          alt="dot"
                          width={33}
                          height={33}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div
              className="group"
              onClick={() => {
                setCurrentProduct(2);
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-[160px] flex justify-center ${
                    currentProduct === 2
                      ? 'text-white'
                      : 'text-vte-gray-6 hover:cursor-pointer group-hover:text-white'
                  }`}
                >
                  {t('glass.2.title')}
                </div>
              </div>
              <div className="w-[160px] flex justify-center">
                <div className="w-[33px] h-[33px] flex items-center justify-center">
                  {currentProduct === 2 ? (
                    <Image
                      src="/images/FocusedProduct.png"
                      alt="dot"
                      width={33}
                      height={33}
                    />
                  ) : (
                    <>
                      <div className="absolute visible group-hover:invisible">
                        <Image
                          src="/images/UnFocusedProduct.png"
                          alt="dot"
                          width={13}
                          height={13}
                        />
                      </div>
                      <div className="absolute invisible group-hover:visible">
                        <Image
                          src="/images/FocusedProduct.png"
                          alt="dot"
                          width={33}
                          height={33}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div
              className="group"
              onClick={() => {
                setCurrentProduct(3);
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-[160px] flex justify-center ${
                    currentProduct === 3
                      ? 'text-white'
                      : 'text-vte-gray-6 hover:cursor-pointer group-hover:text-white'
                  }`}
                >
                  {t('glass.3.title')}
                </div>
              </div>
              <div className="w-[160px] flex justify-center">
                <div className="w-[33px] h-[33px] flex items-center justify-center">
                  {currentProduct === 3 ? (
                    <Image
                      src="/images/FocusedProduct.png"
                      alt="dot"
                      width={33}
                      height={33}
                    />
                  ) : (
                    <>
                      <div className="absolute visible group-hover:invisible">
                        <Image
                          src="/images/UnFocusedProduct.png"
                          alt="dot"
                          width={13}
                          height={13}
                        />
                      </div>
                      <div className="absolute invisible group-hover:visible">
                        <Image
                          src="/images/FocusedProduct.png"
                          alt="dot"
                          width={33}
                          height={33}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div
              className="group"
              onClick={() => {
                setCurrentProduct(4);
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-[160px] flex justify-center ${
                    currentProduct === 4
                      ? 'text-white'
                      : 'text-vte-gray-6 hover:cursor-pointer group-hover:text-white'
                  }`}
                >
                  {t('glass.4.title')}
                </div>
              </div>
              <div className="w-[160px] flex justify-center">
                <div className="w-[33px] h-[33px] flex items-center justify-center">
                  {currentProduct === 4 ? (
                    <Image
                      src="/images/FocusedProduct.png"
                      alt="dot"
                      width={33}
                      height={33}
                    />
                  ) : (
                    <>
                      <div className="absolute visible group-hover:invisible">
                        <Image
                          src="/images/UnFocusedProduct.png"
                          alt="dot"
                          width={13}
                          height={13}
                        />
                      </div>
                      <div className="absolute invisible group-hover:visible">
                        <Image
                          src="/images/FocusedProduct.png"
                          alt="dot"
                          width={33}
                          height={33}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full h-10 absolute mt-[20vw] items-center">
          <Observer dispatch={setPageCatch} />
        </div>
        {currentProduct === 1 ? (
          <>
            <div
              className={`w-[21.979vw] h-[4.479vw] z-10 absolute mt-[8vw] ml-[39vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product1Line1.png" alt="product" fill />
            </div>
            <div
              className={`w-[36.354vw] h-[0.3125vw] z-10 absolute mt-[13.6vw] ml-[24.5vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product1Line2.png" alt="product" fill />
            </div>
            <div
              className={`w-[14.635vw] h-[4.219vw] z-10 absolute mt-[15.5vw] ml-[46.5vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product1Line3.png" alt="product" fill />
            </div>
            <div
              className={`w-[10vw] h-[8.91vw] z-10 absolute mt-[10vw] ml-[62vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product1.png" alt="product" fill />
              <div className="mt-[8.91vw] ml-[3vw] font-apple text-white w-[500px]">
                <div className="text-[42px]">{t('glass.1.title2')}</div>
                <div className="mt-[20px] text-[20px]">
                  {t('glass.1.description3')}
                </div>
                <div className="text-[20px]">{t('glass.1.description4')}</div>
                <div className="text-[20px]">{t('glass.1.description5')}</div>
                <div className="text-[20px]">{t('glass.1.description6')}</div>
                <div
                  className="mt-[30px] text-[20px] text-vte-violet2 hover:cursor-pointer"
                  onClick={() => {
                    router.push({
                      pathname: `/support`,
                      query: {
                        tab: '2',
                      },
                    });
                  }}
                >
                  {t('word.contact')}
                </div>
              </div>
            </div>
            <div className="w-[87.5vw] h-[39.375vw] relative mr-[18.333vw] animate-fade-in-left">
              <Image
                src="/images/_ProductBg1.png"
                alt="product"
                fill
                quality={100}
              />
            </div>
          </>
        ) : null}
        {currentProduct === 2 ? (
          <>
            <div
              className={`w-[9.115vw] h-[6.667vw] z-10 absolute mt-[10.52vw] ml-[43.9vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product2Line.png" alt="product" fill />
            </div>
            <div
              className={`w-[10.1vw] h-[22.97vw] z-10 absolute mt-[3vw] ml-[52.6vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product2.png" alt="product" fill />
              <div className="mt-[24vw] ml-[2vw] font-apple text-white w-[500px]">
                <div className="text-[42px]">{t('glass.2.title')}</div>
                <div className="mt-[20px] text-[20px]">
                  {t('glass.2.description3')}
                </div>
                <div className="text-[20px]">{t('glass.2.description4')}</div>
                <div
                  className="mt-[30px] text-[20px] text-vte-violet2 hover:cursor-pointer"
                  onClick={() => {
                    router.push({
                      pathname: `/support`,
                      query: {
                        tab: '2',
                      },
                    });
                  }}
                >
                  {t('word.contact')}
                </div>
              </div>
            </div>
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
          </>
        ) : null}
        {currentProduct === 3 ? (
          <>
            <div
              className={`w-[24.947vw] h-[12.03vw] z-10 absolute mt-[25.52vw] ml-[24.22vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/_Product3.png" alt="product" fill />
              <div className="mt-[13vw] ml-[2vw] font-apple text-white w-[700px]">
                <div className="text-[42px]">{t('glass.3.title')}</div>
                <div className="mt-[20px] text-[20px]">
                  {t('glass.3.description3')}
                </div>
                <div className="text-[20px]">{t('glass.3.description4')}</div>
                <div className="text-[20px]">{t('glass.3.description5')}</div>
                <div className="text-[20px]">{t('glass.3.description6')}</div>
                <div className="text-[20px]">{t('glass.3.description7')}</div>
                <div
                  className="mt-[30px] text-[20px] text-vte-violet2 hover:cursor-pointer"
                  onClick={() => {
                    router.push({
                      pathname: `/support`,
                      query: {
                        tab: '2',
                      },
                    });
                  }}
                >
                  {t('word.contact')}
                </div>
              </div>
            </div>
            <div
              className={`w-[19.53vw] h-[10.364vw] z-10 absolute mt-[18.4375vw] ml-[47.395vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product3Line.png" alt="product" fill />
            </div>
            <div className="w-[77.92vw] h-[40.83vw] relative ml-[14.1vw] animate-fade-in-left">
              <Image
                src="/images/ProductBg3.png"
                alt="product"
                fill
                quality={100}
              />
            </div>
          </>
        ) : null}
        {currentProduct === 4 ? (
          <>
            <div
              className={`w-[13.8vw] h-[19.792vw] z-10 absolute mt-[7.45vw] ml-[51.82vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product4.png" alt="product" fill />
              <div className="mt-[20vw] ml-[1vw] font-apple text-white w-[500px]">
                <div className="text-[42px]">{t('glass.4.title2')}</div>
                <div className="mt-[20px] text-[20px]">
                  {t('glass.4.description3')}
                </div>
                <div className="text-[20px]">{t('glass.4.description4')}</div>
                <div className="text-[20px]">{t('glass.4.description5')}</div>
                <div className="text-[20px]">{t('glass.4.description6')}</div>
                <div className="text-[20px]">{t('glass.4.description7')}</div>
                <div className="mt-[30px] text-[20px] font-bold">
                  {t('glass.4.description8')}
                </div>
                <div className="text-[20px] font-bold">
                  {t('glass.4.description9')}
                </div>
                <div
                  className="mt-[30px] text-[20px] text-vte-violet2 hover:cursor-pointer"
                  onClick={() => {
                    router.push({
                      pathname: `/support`,
                      query: {
                        tab: '2',
                      },
                    });
                  }}
                >
                  {t('word.contact')}
                </div>
              </div>
            </div>
            <div
              className={`w-[20.677vw] h-[8.125vw] z-10 absolute mt-[9.843vw] ml-[32vw] ${
                pageCatch ? 'transition-all animate-fade-in-down2' : 'hidden'
              } `}
            >
              <Image src="/images/Product4Line.png" alt="product" fill />
            </div>
            <div className="w-[46.67vw] h-[37.81vw] relative ml-[12.6vw] animate-fade-in-left">
              <Image
                src="/images/ProductBg4.png"
                alt="product"
                fill
                quality={100}
              />
            </div>
          </>
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
                <div
                  className={`absolute translate-y-[267px] translate-x-[-78px] flex flex-col items-center w-[200px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_3Line.png"
                      alt="productLine"
                      width={6}
                      height={86}
                    />
                  </div>
                  <div className="h-[30px] flex items-center">
                    {t('products.1.3')}
                  </div>
                </div>
                <Image
                  className="mr-[44px] z-10"
                  src="/images/Product1_3.png"
                  alt="product"
                  width={44}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={left300}>
                <div
                  className={`absolute translate-y-[-179px] translate-x-[-60px] flex flex-col items-center w-[200px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    {t('products.1.2')}
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_5Line.png"
                      alt="productLine"
                      width={6}
                      height={139}
                    />
                  </div>
                </div>
                <Image
                  className="mr-[69px] z-20"
                  src="/images/Product1_2.png"
                  alt="product"
                  width={69}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={left700}>
                <div
                  className={`absolute translate-y-[323px] translate-x-[-70px] flex flex-col items-center w-[200px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_1Line.png"
                      alt="productLine"
                      width={6}
                      height={191}
                    />
                  </div>
                  <div className="h-[30px] flex items-center">
                    {t('products.1.1')}
                  </div>
                </div>
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
                <div
                  className={`absolute translate-y-[267px] translate-x-[-34px] flex flex-col items-center w-[200px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_3Line.png"
                      alt="productLine"
                      width={6}
                      height={86}
                    />
                  </div>
                  <div className="h-[30px] flex items-center">
                    {t('products.1.4')}
                  </div>
                </div>
                <Image
                  className="ml-[44px] z-10"
                  src="/images/Product1_4.png"
                  alt="product"
                  width={44}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={right300}>
                <div
                  className={`absolute translate-y-[-179px] translate-x-[-1px] flex flex-col items-center w-[200px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    {t('products.1.5')}
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_5Line.png"
                      alt="productLine"
                      width={6}
                      height={139}
                    />
                  </div>
                </div>
                <Image
                  className="ml-[69px] z-20"
                  src="/images/Product1_5.png"
                  alt="product"
                  width={69}
                  height={247}
                  quality={100}
                />
              </div>
              <div className={right700}>
                <div
                  className={`absolute translate-y-[323px] translate-x-[58px] flex flex-col items-center w-[200px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_1Line.png"
                      alt="productLine"
                      width={6}
                      height={191}
                    />
                  </div>
                  <div className="h-[30px] flex items-center">
                    {t('products.1.6')}
                  </div>
                </div>
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
              <div className={`${left880} ${top200}`}>
                <div
                  className={`absolute translate-y-[20px] translate-x-[230px] flex justify-between gap-[10px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineRight.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                  <div className="h-[30px] flex items-center w-[300px] pt-[3px]">
                    {t('products.2.1')}
                  </div>
                </div>
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
              <div className={`${left480} ${top100}`}>
                <div
                  className={`absolute translate-y-[20px] translate-x-[260px] flex justify-between gap-[10px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineRight.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                  <div className="h-[30px] flex items-center w-[300px] pt-[3px]">
                    {t('products.2.2')}
                  </div>
                </div>
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
                <div
                  className={`absolute translate-y-[20px] translate-x-[240px] flex justify-between gap-[10px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineRight.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                  <div className="h-[30px] flex items-center w-[300px] pt-[3px]">
                    {t('products.2.3')}
                  </div>
                </div>
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
              <div className={`${right480} ${bottom100}`}>
                <div
                  className={`absolute translate-y-[530px] translate-x-[-280px] flex justify-between gap-[10px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center justify-end w-[300px] pt-[3px]">
                    {t('products.2.4')}
                  </div>
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineLeft.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                </div>
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
              <div className={`${right880} ${bottom200}`}>
                <div
                  className={`absolute translate-y-[550px] translate-x-[-270px] flex justify-between gap-[10px] ${
                    catch7 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center justify-end w-[300px] pt-[3px]">
                    {t('products.2.5')}
                  </div>
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineLeft.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                </div>
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
              <div className={`${right700} ${top400}`}>
                <div
                  className={`absolute translate-y-[70px] translate-x-[-400px] flex justify-between gap-[10px] ${
                    catch8 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center justify-end w-[300px] pt-[3px]">
                    {t('products.3.5')}
                  </div>
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineLeft.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                </div>
                <Image
                  className="z-10"
                  src="/images/Product3_5.png"
                  alt="product"
                  width={420}
                  height={210}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${right300} ${top200}`}>
                <div
                  className={`absolute translate-y-[70px] translate-x-[-400px] flex justify-between gap-[10px] ${
                    catch8 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center justify-end w-[300px] pt-[3px]">
                    {t('products.3.4')}
                  </div>
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineLeft.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                </div>
                <Image
                  className="z-20"
                  src="/images/Product3_4.png"
                  alt="product"
                  width={420}
                  height={210}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute">
                <div
                  className={`absolute translate-y-[70px] translate-x-[-400px] flex justify-between gap-[10px] ${
                    catch8 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center justify-end w-[300px] pt-[3px]">
                    {t('products.3.3')}
                  </div>
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineLeft.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                </div>
                <Image
                  className="z-30"
                  src="/images/Product3_3.png"
                  alt="product"
                  width={420}
                  height={210}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${left300} ${bottom200}`}>
                <div
                  className={`absolute translate-y-[150px] translate-x-[400px] flex justify-between gap-[10px] ${
                    catch8 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineRight.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                  <div className="h-[30px] flex items-center w-[300px] pt-[3px]">
                    {t('products.3.2')}
                  </div>
                </div>
                <Image
                  className="z-40"
                  src="/images/Product3_2.png"
                  alt="product"
                  width={420}
                  height={210}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${left700} ${bottom400}`}>
                <div
                  className={`absolute translate-y-[150px] translate-x-[400px] flex justify-between gap-[10px] ${
                    catch8 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    <Image
                      className=""
                      src="/images/Product2LineRight.png"
                      alt="productLine"
                      width={191}
                      height={6}
                    />
                  </div>
                  <div className="h-[30px] flex items-center w-[300px] pt-[3px]">
                    {t('products.3.1')}
                  </div>
                </div>
                <Image
                  className="z-50"
                  src="/images/Product3_1.png"
                  alt="product"
                  width={420}
                  height={210}
                  quality={100}
                  priority
                />
              </div>
            </>
          ) : null}
          {currentProduct === 4 ? (
            <>
              <div className={`${right600} ${top200}`}>
                <div
                  className={`absolute translate-y-[100px] translate-x-[-20px] flex flex-col items-center w-[200px] ${
                    catch6 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    {t('products.4.3')}
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_5Line.png"
                      alt="productLine"
                      width={6}
                      height={139}
                    />
                  </div>
                </div>
                <Image
                  className="z-10 mr-[350px] mt-[200px]"
                  src="/images/Product4_3.png"
                  alt="product"
                  width={310}
                  height={320}
                  quality={100}
                  priority
                />
              </div>
              <div className={`${right300} ${top100}`}>
                <div
                  className={`absolute translate-y-[100px] translate-x-[-20px] flex flex-col items-center w-[200px] ${
                    catch6 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    {t('products.4.2')}
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_5Line.png"
                      alt="productLine"
                      width={6}
                      height={139}
                    />
                  </div>
                </div>
                <Image
                  className="z-20 mr-[350px] mt-[200px]"
                  src="/images/Product4_2.png"
                  alt="product"
                  width={310}
                  height={320}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute">
                <div
                  className={`absolute translate-y-[100px] translate-x-[-10px] flex flex-col items-center w-[200px] ${
                    catch6 ? 'transition-all animate-fade-in' : 'hidden'
                  }`}
                >
                  <div className="h-[30px] flex items-center">
                    {t('products.4.1')}
                  </div>
                  <div>
                    <Image
                      className=""
                      src="/images/Product1_5Line.png"
                      alt="productLine"
                      width={6}
                      height={139}
                    />
                  </div>
                </div>
                <Image
                  className="z-30 mr-[350px] mt-[200px]"
                  src="/images/Product4_1.png"
                  alt="product"
                  width={310}
                  height={320}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute">
                <Image
                  className="z-30 mr-[500px] mt-[350px]"
                  src="/images/Product4Sub.png"
                  alt="product"
                  width={337}
                  height={360}
                  quality={100}
                  priority
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
      <ProductDetail product={currentProduct} />
    </>
  );
};

export default Products;
