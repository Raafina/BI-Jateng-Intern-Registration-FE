import LandingLayout from '../../Layouts/LandingLayout';
import Hero from '../../UI/LandingPage/Hero';
import Requirements from '../../UI/LandingPage/Requirement';
import FAQAccor from '../../UI/LandingPage/FAQAccor';

const HomePages = () => {
  return (
    <LandingLayout>
      <Hero />
      <Requirements />
      <FAQAccor />
    </LandingLayout>
  );
};

export default HomePages;
