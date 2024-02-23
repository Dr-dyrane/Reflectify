import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ disabled }) => {
  const logoContent = (
    <>
      <img
        src="/logo.png"
        className="h-8 bg-none p-[1px]"
        alt="Reflectify Logo"
      />
      <span className="self-center text-2xl text-amber-900 font-semibold whitespace-nowrap dark:text-amber-100">
        Reflectify™
      </span>
    </>
  );

  return disabled ? (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </div>
  ) : (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      {logoContent}
    </Link>
  );
};

export default Logo;
