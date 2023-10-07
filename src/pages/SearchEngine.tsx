import SearchEngineCard from '@/components/SearchEngineCard';
import { StarsCanvas } from '@/components/canvas';

const SearchEngine = () => {
  return (
    <>
      <div className="relative z-0 h-[calc(100vh-54px)] flex items-center justify-center">
        <StarsCanvas />
        <SearchEngineCard />
      </div>
    </>
  );
};

export default SearchEngine;
