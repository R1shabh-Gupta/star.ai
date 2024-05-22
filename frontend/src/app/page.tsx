"use client";

import GalaxyCanvas from "@/components/canvas/Galaxy";
import { PinContainer } from "@/components/ui/3d-pin";

export default function Home() {
  return (
    <main className="relative z-0 min-w-full">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="mb-6 text-6xl font-bold text-center sm:text-7xl font-body">
            Infinity and Beyond.
          </h1>
          <div className="flex gap-8">
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  AERO CORE
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full mt-4 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>

            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  SEARCH ENGINE
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full mt-4 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
      <GalaxyCanvas />
    </main>
  );
}
