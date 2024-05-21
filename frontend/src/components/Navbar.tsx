import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center border-b">
      <div className="flex items-center flex-1 gap-6 py-5 pl-8 ">
        <Link href="/">Home</Link>
        <Link href="/search_engine/page">Search Engine</Link>
        <Link href="/aero_core/page">AERO Core</Link>
      </div>
      <div className="flex-1 py-5 text-center border-l border-r">
        <h1>STAR AI</h1>
      </div>
      <div className="flex items-center justify-end flex-1 gap-6 py-5 pr-8 ">
        <Link href="/documentation">Docs</Link>
        <Link href="/contact">GitHub</Link>
      </div>
    </div>
  );
};

export default Navbar;
