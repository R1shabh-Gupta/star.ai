import GalaxyCanvas from "@/components/canvas/Galaxy";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="relative z-0">
        <div className="h-[calc(100vh-54px)] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8 -mt-48 sm:-mt-20">
            <h1 className="mb-6 text-6xl font-bold text-center sm:text-7xl">
              Infinity and Beyond.
            </h1>
            <div className="flex gap-8">
              <Button>Chatbot</Button>
              <Button>Search Engine</Button>
            </div>
          </div>
        </div>
        <GalaxyCanvas />
      </div>
    </main>
  );
}
