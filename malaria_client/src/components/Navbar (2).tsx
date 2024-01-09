import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <div className="text-3xl font-black text-primary uppercase dark:text-white">
          Diagnose.me
        </div>
        <div className="flex items-center">
          <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
            <Link href={"/"}>
              <a href="#" className="flex px-6 py-2 font-semibold">
                Home
              </a>
            </Link>

            <Link href={"/app/prescribe"}>
              <a href="#" className=" font-semibold flex px-6 py-2">
                Get Prescription
              </a>
            </Link>
            <Link href={"/app/diagnose"}>
              <a href="#" className=" font-semibold flex px-6 py-2">
                Diagnose
              </a>
            </Link>
            <Link href={"/auth/login"}>
              <a href="#" className="flex px-6 py-2">
                <button className=" border font-semibold border-primary text-white bg-primary hover:bg-transparent hover:text-primary rounded-md py-1   px-3">
                  Login
                </button>
              </a>
            </Link>
            <Link href={"/auth/signup"}>
              <a href="#" className="flex px-6 py-2">
                <button className=" font-semibold border border-primary rounded-md py-1 hover:text-white hover:bg-primary px-3">
                  SignUp
                </button>
              </a>
            </Link>
          </nav>

          <button className="flex flex-col ml-4 lg:hidden">
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
