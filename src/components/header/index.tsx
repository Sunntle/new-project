import Link from "next/link";
import { Button } from "../ui/button";
import Navbar from "../navbar";

const Header = ({isHomePage} : {isHomePage: boolean}) => {
  return (
    <header className={`py-4 top-0 z-50 w-full ${isHomePage ? "fixed bg-transparent": "bg-main sticky"}`}>
      <div className={`${isHomePage ? "text-black" :" text-white"} container flex justify-between items-center`}>
        <Link href="/" className="font-semibold text-lg">Baycungban</Link>
        <Navbar />
        <Button variant="outline" className="rounded-xl" asChild>
          <Link href="/register" className={isHomePage ?`bg-main text-white border-main` : "bg-white text-main border-white"}>Booking now</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
