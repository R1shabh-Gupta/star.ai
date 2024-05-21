import GalaxyCanvas from "@/components/canvas/Galaxy";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  return (
    <main className="relative z-0 min-w-full">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center gap-8 -mt-40 sm:-mt-20">
          <h1 className="mb-6 text-6xl font-bold text-center sm:text-7xl font-body">
            Infinity and Beyond.
          </h1>
          <div className="flex gap-8">
            <HoverBorderGradient>Chatbot</HoverBorderGradient>
            <HoverBorderGradient>Search Engine</HoverBorderGradient>
          </div>
        </div>
      </div>
      <GalaxyCanvas />
    </main>
  );
}
