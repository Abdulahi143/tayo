"use client";
import Image from "next/image";
import React from "react";

  export default function AboutPage() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-24">
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-yellow-500 pb-4">
          Om Tayo
        </h1>
        <p className="font-normal text-base leading-6 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.In the first place we have granted to God, and by this
          our present charter confirmed for us and our heirs forever that the
          English Church shall be free, and shall have her rights entire, and her
          liberties inviolate; and we will that it be thus observed; which is
          apparent from
        </p>
      </div>
      <div className="w-full lg:w-8/12">
        <Image
          className="w-full h-full"
          src="/images/tayo.png"
          alt="TayoAboutImage"
          height={500}
              width={500}
        />
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-yellow-500 pb-4">
          Vilka vi är
        </h1>
        <p className="font-normal text-base leading-6 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.In the first place we have granted to God, and by this
          our present charter confirmed for us and our heirs forever that the
          English Church shall be free, and shall have her rights entire, and her
          liberties inviolate; and we will that it be thus observed; which is
          apparent from
        </p>
      </div>
      <div className="w-full lg:w-8/12 lg:pt-8">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <Image
              className="md:block hidden"
              src="/images/s-siyaad.jpg"
              alt="Alexa featured Image"
              height={500}
              width={500}
            />
            <p className="font-medium text-xl leading-5 text-white dark:text-white mt-4">
              Said
            </p>
          </div>
          
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <Image
              className="md:block hidden"
              src="/images/a-osman.jpg"
              alt="Liam featued Image"
              height={500}
              width={500}
            />
            <p className="font-medium text-xl leading-5 text-white dark:text-white mt-4">
              Abdiaziz 
            </p>
          </div>
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <Image
              className="md:block hidden"
              src="/images/me.jpg"
              alt="Elijah featured image"
              height={500}
              width={500}
            />
            
            <p className="font-medium text-xl leading-5 text-white dark:text-white mt-4">
              Abdullahi
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};