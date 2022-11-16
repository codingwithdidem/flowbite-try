import { Navbar, Button } from "flowbite-react";
import Image from "next/image";

const Header = () => {
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
          <Button>Get started</Button>
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
