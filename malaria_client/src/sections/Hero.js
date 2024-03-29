import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-gray-300 dark:bg-gray-800">
      <div className="container relative flex px-6 py-4 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
          <h1 className="flex flex-col text-7xl font-black leading-none text-gray-800 uppercase font-bebas-neue  dark:text-white">
          Let's get rid of maleria
            <span className="text-4xl text-primary">In Africa</span>
          </h1>
          <p className="text-xl font-bold text-gray-700  dark:text-white">
            With the Help of Experts
          </p>
          <div className="flex mt-8">
            <Link href={"/app/diagnose"}>
              <a
                href="#"
                className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
              >
                Get started
              </a>
            </Link>
            {/* <a
              href="#"
              className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
            >
              Read more
            </a> */}
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <div className=" relative flex justify-end px-10">
            <div className="absolute shadow-lg my-2 top-[10%] left-[25%] flex items-center  z-10 w-[50%] justify-between rounded-2xl py-2 px-2 space-x-5 bg-white">
              <div className="shadow-lg  rounded-2xl py-1 px-1 ">
                <Image src="/m.jpg" width={200} height={200} />
              </div>
              <div className=" flex flex-col w-full my-6">
                <div className=" flex justify-between items-center w-full ">
                  <h3 className=" text-2xl font-bold font-head ">
                    Dr. Abdulmujib oyewo
                  </h3>
                </div>
                <p className=" text-xs">Malaria Expert</p>
              </div>
            </div>
            <div className="absolute shadow-lg my-2 top-[50%] right-[-5%] flex items-center  z-10 w-[50%] justify-between rounded-2xl py-2 px-2 space-x-5 bg-white">
              <div className="shadow-lg  rounded-2xl py-1 px-1 ">
                <Image src="/mujib.jpg" width={200} height={200} />
              </div>
              <div className=" flex flex-col w-full my-6">
                <div className=" flex justify-between items-center w-full ">
                  <h3 className=" text-2xl font-bold font-head ">
                    Dr. Jeni Jones
                  </h3>
                </div>
                <p className=" text-xs">Malaria Expert</p>
              </div>
            </div>

            <Image
              src="/ml.jpg"
              width={400}
              height={400}
              className=" right rounded-2xl shadow-lg box-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
