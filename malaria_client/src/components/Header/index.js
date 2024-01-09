import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import Link from "next/link";
// import { signOut, useSession } from 'next-auth/react';
import { useTheme } from "next-themes";
const Header = ({ title }) => {
  // const { data } = useSession();
  return (
    <div className=" relative   flex w-full  py-5 px-20 flex-row items-center justify-between  shadow">
      <div className=" flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5 text-secondary"
        >
          <path
            fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5 text-secondary"
        >
          <path
            fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clip-rule="evenodd"
          />
        </svg>

        <h5 className="text-lg ml-5 font-normal text-black">{title}</h5>
      </div>

      <div className=" flex flex-row items-center space-x-5">
        <div className=" font-bold">Welcome </div>
        <div className=" flex flex-row bg-[#EBF9EB] rounded-3xl  py-2 px-3 space-x-3">
          <h5 className=" text-[#E6702F]">Dr. Abdulmujib Oyewo</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
