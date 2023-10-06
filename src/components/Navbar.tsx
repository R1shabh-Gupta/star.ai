import { ModeToggle } from './mode-toggle';
import { NavigationMenu } from './ui/navigation-menu';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between py-2 px-10 items-center bg-slate-50 dark:bg-[#0a0a0b]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 dark:bg-gradient-to-r dark:from-white dark:via-sky-500 dark:to-sky-500 bg-clip-text text-transparent">
          STAR.ai
        </h1>

        {/* menu */}
        {/* mobile */}
        <div className="md:hidden flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-right"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="21" x2="9" y1="12" y2="12" />
                <line x1="21" x2="7" y1="18" y2="18" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <a
                  href="https://github.com/R1shabh-Gupta/TextWiz"
                  target="_blank"
                >
                  GitHub
                </a>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* dark mode */}
          <ModeToggle />
        </div>
        {/* large screen */}
        <div className="md:flex gap-5 hidden">
          <NavigationMenu className="flex gap-2">
            <div className="flex gap-4 flex-wrap justify-around">
              <Button variant="outline" size="icon">
                <a
                  href="https://github.com/R1shabh-Gupta/TextWiz"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </Button>
            </div>
          </NavigationMenu>
          {/* dark mode */}
          <ModeToggle />
        </div>
      </nav>

      {/* Divider */}
      <div className="divide-y h-[1px] w-full bg-slate-300" />
    </>
  );
};

export default Navbar;
