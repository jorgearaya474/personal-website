"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CtaButton from "@/components/ui/CtaButton";

const routesArray = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(
    function handleStickyHeader() {
      const handleScroll = (): void => {
        const scrolled = window.scrollY > 100;
        setIsScrolled(scrolled);
      };

      if (typeof Window !== "undefined") {
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    },
    [isScrolled],
  );

  useEffect(
    function handleMobileMenu() {
      if (isMenuOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }

      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    },
    [isMenuOpen],
  );

  // Function to check if link is active
  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`${isScrolled ? "backdrop-blur-md bg-zinc-800/40" : "bg-transparent"} fixed w-full top-0 z-50 transition-colors duration-300`}
      >
        <div className="container mx-auto py-5 md:py-7 lg:py-0">
          <div className="flex gap-x-8 justify-between">
            <div className="flex items-center">
              <Link href={"/"}>
                <p className="font-primary uppercase font-black text-2xl text-white">
                  Jorge
                  <span className="text-teal-400 hover:text-amber-400 transition-colors duration-300">
                    Araya
                  </span>
                  .
                </p>
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-13 h-13 z-0 justify-center text-sm text-white rounded-lg lg:hidden focus:outline-none focus:text-teal-400"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Menu desktop */}
            <div className="py-2 hidden lg:block">
              <nav>
                <ul className="flex gap-4 items-center justify-between">
                  {routesArray.map(([name, path]) => (
                    <li key={name}>
                      <Link
                        className={`p-4 block text-xl font-secondary font-medium transition-colors duration-300 ${
                          isActive(path)
                            ? "text-teal-400 font-bold"
                            : "text-white hover:text-teal-400"
                        }`}
                        href={path}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <CtaButton
                      text="Get in touch"
                      href="mailto:jorgearaya474@gmail.com"
                      target="_self"
                      title="Get in touch with Jorge"
                      className=""
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-full h-full bg-zinc-900 p-6 transition-transform duration-300 lg:hidden z-50`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-4xl focus:text-teal-400"
        >
          &times;
        </button>
        <div className="flex flex-col justify-between h-full">
          <nav>
            <ul className="flex flex-col gap-10 mt-10">
              {routesArray.map(([name, path]) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`p-4 block text-xl font-secondary font-medium transition-colors duration-300 ${
                      isActive(path)
                        ? "text-teal-400 font-bold"
                        : "text-white hover:text-teal-400"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="">
            <CtaButton
              text="Get in touch"
              href="mailto:jorgearaya474@gmail.com"
              target="_self"
              title="Get in touch with Jorge"
              className="block w-full text-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
