import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm dark:bg-eerie border-t-[1px] border-slate-500">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-xs md:text-sm text-golden sm:text-center dark:text-golden/50 font-light">
          © {currentYear}{" "}
          <Link to="/" className="hover:underline">
            Reflectify™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex items-center mt-3 text-xs font-medium text-golden dark:text-golden/50 sm:mt-0">
          <img
            src="/dyrane.png"  // Replace with the actual path to your logo
            alt="Logo"
            className="h-5 w-auto"
          />
          <a
            href="https://linktr.ee/Dyrane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline ml-4"
          >
            Designed by Dyrane.
          </a>
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-golden dark:text-golden/50 sm:mt-0">
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
