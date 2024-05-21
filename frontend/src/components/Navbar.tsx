"use client";

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 z-10 flex items-center w-full px-12 py-4 text-sm bg-blue-200 bg-opacity-0 gap-14 font-body bg-clip-padding backdrop-filter backdrop-blur-lg">
      <Link href="/" className="text-xl font-heading">
        STAR AI
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/search_engine">Search Engine</Link>
        <Link href="/aero_core">AERO Core</Link>
        <Link href="/documentation">Docs</Link>
        <Link href="https://github.com/R1shabh-Gupta/star.ai" target="_blank">
          GitHub
        </Link>

        <SearchBar />
      </div>
    </div>
  );
};

function SearchBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className="hidden h-[35px] w-[250px] items-center justify-between rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:inline-flex md:w-[300px] dark:border-slate-600/60 dark:text-white hover:bg-slate-900"
        accessKey="k"
        type="button"
        onClick={(prev) => setOpen(true)}
      >
        Quick search
        <div className="flex items-center gap-1">
          <label className="text-slate-300">⌘</label>
          <label>K</label>
        </div>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="w-4 h-4 mr-2" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="w-4 h-4 mr-2" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="w-4 h-4 mr-2" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="w-4 h-4 mr-2" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="w-4 h-4 mr-2" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default Navbar;
