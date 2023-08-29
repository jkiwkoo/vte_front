import { Flow } from '@/components/Flow';
import { GlassScreen } from '@/components/GlassScreen';
import { Header } from '@/components/Header';
import { Screen } from '@/components/Screen';

const Home = () => {
  return (
    <>
      <Header isBlack={false} />
      <Screen />
      <Flow />
      <GlassScreen glass={1} isFocus={true} />
      <GlassScreen glass={2} isFocus={true} />
      <GlassScreen glass={3} isFocus={true} />
      <GlassScreen glass={4} isFocus={true} />
    </>
  );
};

export default Home;
