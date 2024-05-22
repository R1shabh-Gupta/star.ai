"use client";

import QuestionAnswerInterface from "@/components/QuestionAnswerInterface";
import { Icon } from "@/components/ui/Icon";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Handbook {
  _id: string;
  Name: string;
  Tag: string;
  Description: string;
  Link: string;
  content: string;
}

const SearchEngine = () => {
  const [handbooks, setHandbooks] = useState<Handbook[]>([]);
  const [selectedTags, setSelectedTags] = useState(["Software"]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get-handbook-data");
      const finalData = await response.json();
      setHandbooks(finalData);
      setLoading(false);

      console.log(finalData);
    };
    fetchData();
  }, []);

  const handleTags = (value: string[]) => {
    setSelectedTags(value);

    console.log(selectedTags);
  };

  return (
    <div className="mb-16">
      <HeroHighlight>
        <div className="flex flex-col items-center justify-center w-full gap-24">
          <div className="flex flex-col items-center mt-32 gap-14">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="flex items-center max-w-4xl gap-6 px-4 mx-auto text-2xl font-bold leading-relaxed text-center md:text-4xl lg:text-5xl text-neutral-700 dark:text-white lg:leading-snug font-body"
            >
              Explore <span className="font-heading">NASA&apos;s</span>{" "}
              Handbooks
            </motion.h1>
            <div className="flex flex-col items-center w-full gap-7">
              <QuestionAnswerInterface />
              <div className="border border-black/[0.3] group/canvas-card flex flex-col gap-3 items-center justify-center dark:border-white/[0.2] mt-5 w-full mx-auto p-4 relative bg-black/30">
                <Icon className="absolute w-6 h-6 text-black -top-3 -left-3 dark:text-white" />
                <Icon className="absolute w-6 h-6 text-black -bottom-3 -left-3 dark:text-white" />
                <Icon className="absolute w-6 h-6 text-black -top-3 -right-3 dark:text-white" />
                <Icon className="absolute w-6 h-6 text-black -bottom-3 -right-3 dark:text-white" />
                <h2 className="text-xl font-bold font-heading">Tags</h2>
                <ToggleGroup
                  type="multiple"
                  className="gap-6 font-body"
                  variant="outline"
                  defaultValue={selectedTags}
                  onValueChange={(value) => handleTags(value)}
                >
                  <ToggleGroupItem value="Software" aria-label="Software">
                    <p>Software</p>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Hardware" aria-label="Hardware">
                    <p>Hardware</p>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Electrical" aria-label="Electrical">
                    <p>Electrical</p>
                  </ToggleGroupItem>

                  <ToggleGroupItem value="Electronics" aria-label="Electronics">
                    <p>Electronics</p>
                  </ToggleGroupItem>

                  <ToggleGroupItem value="Testing" aria-label="Testing">
                    <p>Testing</p>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-screen space-x-2 bg-white dark:invert">
              <span className="sr-only">Loading...</span>
              <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-8 h-8 bg-white rounded-full animate-bounce"></div>
            </div>
          ) : !handbooks ? null : (
            handbooks
              .filter((handbook) => selectedTags.includes(handbook.Tag))
              .map((handbook, value) => (
                <div className="w-[100vw]" key={value}>
                  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col w-[80%] items-start mx-auto p-4 relative bg-black/50 rounded-2xl">
                    <div className="flex items-center gap-5">
                      <EvervaultCard
                        text={handbook.Name}
                        className="font-body"
                      />
                      <div className="flex flex-col gap-3">
                        <h2 className="mt-4 text-xs font-light tracking-[0.2em] text-slate-500 dark:text-white font-body">
                          {handbook.Description}
                        </h2>
                        <button className="relative inline-block p-px text-xs font-semibold leading-6 text-white no-underline rounded-full shadow-2xl cursor-pointer bg-slate-800 group shadow-zinc-900 w-fit">
                          <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          </span>
                          <Link
                            href={handbook.Link}
                            target="_blank"
                            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
                          >
                            <span>Read More</span>
                            <svg
                              fill="none"
                              height="16"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </Link>
                          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </HeroHighlight>
    </div>
  );
};

export default SearchEngine;
