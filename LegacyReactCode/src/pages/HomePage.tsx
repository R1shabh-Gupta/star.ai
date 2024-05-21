import GalaxyCanvas from '@/components/canvas/Galaxy';
import HeroSection from '@/section/HeroSection';

const HomePage = () => {
  return (
    <div>
      <div className="relative z-0">
        <HeroSection />
        <GalaxyCanvas />
      </div>
    </div>
  );
};

export default HomePage;
