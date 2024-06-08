import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";


const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href={"/"}>
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
       <ActiveLink key={navItem.path} { ...navItem } />
      ))}

      {/* The previous code is equivalent to the following code, but the previous code is more do not need Javascript in the browser,
       so, if the user has disabled Javascript, the previous code will still work.
      */}

      {/* <Link href="/about" className="ml-2">
        About
      </Link>
      <Link href="/contact" className="ml-2">
        Contact
      </Link>
      <Link href="/pricing" className="ml-2">
        Pricing
      </Link> */}
      
    </nav>
  );
};
