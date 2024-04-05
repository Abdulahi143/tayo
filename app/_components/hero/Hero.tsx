import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBookReader } from "react-icons/bi";

const Hero = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#010922] mt-16 border-b-[1px] border-[#FFC52C]">
        <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
          <div className="lg:flex lg:w-1/2 lg:items-center">
            <div>
              <h1 className="mb-4 text-4xl lg:text-6xl font-black text-white dark:text-white font-montserrat">
                Tayo = {""}
                <span className="text-[#FFC52C] dark:text-blue-500">
                  Kvalitet
                </span>
              </h1>
              <h2 className="text-xl font-medium leading-relaxed text-white dark:text-gray-300 font-montserrat">
                Tayo Förening är en ideell förening som är, religiöst och
                politiskt helt obunden. Föreningen bildades 2013. Att arbeta för
                samhällsfrämjande ändamål. Stödja och främja folkbildningsanda i
                Borlänge genom studiecirklar, läxhjälp och kurser...
              </h2>
              <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center space-x-2 rounded-lg border border-[#066AFF] bg-[#066AFF] px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90 font-montserrat"
                >
                  <BiBookReader className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75 " />
                  <span>läs mer...</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div className="relative mx-5 lg:w-96">
              <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-[#FFC52C] dark:border-blue-900 lg:size-72" />
              <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-100 dark:border-blue-950 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-200 dark:border-blue-900 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-[#FFC52C] dark:border-blue-950 lg:size-72" />
              <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-[#FFC52C] dark:bg-gray-800" />
              <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-300 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75" />
              <Image
                src="/images/tayoo.jpg"
                className="relative mx-auto rounded-lg shadow-lg"
                alt="Hero Image"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
