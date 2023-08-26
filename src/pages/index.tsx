import { Flow } from '@/components/Flow';
import { GlassScreen } from '@/components/GlassScreen';
import { Header } from '@/components/Header';
import { Screen } from '@/components/Screen';
import { useState } from 'react';

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  return (
    <>
      <Header isBlack={false} />
      <Screen isFocus={currentScreen} dispatch={setCurrentScreen} />
      <Flow />
      <GlassScreen glass={1} isFocus={true} />
      <GlassScreen glass={2} isFocus={true} />
      <GlassScreen glass={3} isFocus={true} />
      <GlassScreen glass={4} isFocus={true} />
    </>
  );
};

export default Home;
