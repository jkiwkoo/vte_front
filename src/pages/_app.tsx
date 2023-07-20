import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const Applefonts = localFont({
  src: [
    {
      path: '../../public/fonts/AppleSDGothicNeoB.ttf',
      weight: '400',
    },
  ],
  variable: '--font-apple',
});

const GmarketFonts = localFont({
  src: [
    {
      path: '../../public/fonts/GmarketSansTTFMedium.ttf',
      weight: '400',
    },
  ],
  variable: '--font-gmarket',
});

const GmarketBoldFonts = localFont({
  src: [
    {
      path: '../../public/fonts/GmarketSansTTFBold.ttf',
      weight: '400',
    },
  ],
  variable: '--font-gmarketBold',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div
      className={`${GmarketFonts.variable} ${GmarketBoldFonts.variable} ${Applefonts.variable} font-gmarket`}
    >
      <Component {...pageProps} />
    </div>
  );
};

export default App;
