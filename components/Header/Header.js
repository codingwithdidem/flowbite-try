import { Navbar, Button } from "flowbite-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky z-20 top-0 w-full">
      <Navbar
        fluid={true}
        rounded={true}
        className="lg:backdrop-blur-md lg:backdrop-filter py-2  bg-opacity-20"
      >
        <Navbar.Brand href="https://flowbite.com/">
          <Image
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Spiky Logo"
            width={120}
            height={100}
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          {mounted && (
            <Button
              id="toggle"
              outline={true}
              onClick={toggle}
              className="mr-3 md:mr-0
              bg-gradient-to-r from-blue-400 to-purple-500
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </Button>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
