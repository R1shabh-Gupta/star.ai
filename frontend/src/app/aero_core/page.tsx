"use client";

import QuestionAnswerInterface from "@/components/QuestionAnswerInterface";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

const AEROCore = () => {
  return (
    <div className="">
      <HeroHighlight>
        <div className="flex flex-col items-center justify-center w-full h-screen">
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
            className="flex max-w-4xl px-4 mx-auto text-2xl font-bold leading-relaxed text-center md:text-4xl lg:text-5xl text-neutral-700 dark:text-white lg:leading-snug"
          >
            Ask AERO CORE Anything
          </motion.h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </div>
          <QuestionAnswerInterface />
        </div>
      </HeroHighlight>
    </div>
  );
};

export default AEROCore;
