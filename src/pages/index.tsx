import { Header } from '@/components/Header';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      {t('test.test')}
    </>
  );
};

export default Home;
