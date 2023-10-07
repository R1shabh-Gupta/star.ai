import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-54px)] flex items-center justify-center flex-col gap-8">
      <h1 className="mb-6 text-7xl font-bold">Infinity and Beyond.</h1>
      <div className="flex gap-8">
        <Button onClick={() => navigate('/chatbot')}>Chatbot</Button>
        <Button onClick={() => navigate('/search-engine')}>
          Search Engine
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
