"use client";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-24">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-yellow-500 pb-4">
              Om Tayo
            </h1>
            <p className="font-normal text-base leading-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
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
        {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
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
    </div> */}
      </div>

      <div id="team" className="section relative pt-20 pb-8 md:pt-16">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* section header */}
          <header className="text-center mx-auto mb-12">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
              <span className="font-light">Vår</span> Team
            </h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: "0 auto", height: 35 }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r={5}
                className="stroke-primary"
                style={{
                  fill: "transparent",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1="55.1"
                y1="30.4"
                x2={100}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="45.1"
                y1="30.4"
                x2={0}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
            </svg>
          </header>
          {/* end section header */}

          {/* row */}
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
  <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
   
      {/* team block */}
      <div className="relative overflow-hidden px-6">
        <img
          src="/images/s-siyaad.jpg"
          className="max-w-full h-auto mx-auto rounded-full  "
          alt="title image"
        />
      </div>
      <div className="pt-6 text-center">
        <p className= "text-lg leading-normal font-bold mb-1 text-white">Said Siyaad</p>
        <p className=" text-white leading-relaxed font-light">Ordförande/Trafiklärare</p>
        {/* social icon */}
        <div className="mt-2 mb-5 space-x-2  text-white">
          <a className="hover:text-yellow-500" aria-label="Twitter link" href="#">
            {/* <i class="fab fa-twitter text-twitter"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Facebook link"
            href="#"
          >
            {/* <i class="fab fa-facebook text-facebook"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Instagram link"
            href="#"
          >
            {/* <i class="fab fa-instagram text-instagram"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
              />
              <path
                fill="currentColor"
                d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
              />
              <path
                fill="currentColor"
                d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Linkedin link"
            href="#"
          >
            {/* <i class="fab fa-linkedin text-linkedin"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
              />
            </svg>
          </a>
        </div>
    </div>
    {/* end team block */}
  </div>
  <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">

    {/* team member 2 block */}
    <div>
      <div className="relative overflow-hidden px-6">
        <img
          src="/images/osman.jpg"
          className="max-w-full h-auto mx-auto rounded-full  "
          alt="title image"
        />
      </div>
      <div className="pt-6 text-center">
        <p className= "text-lg leading-normal font-bold mb-1 text-white">Abdiaziz Osman</p>
        <p className=" text-white leading-relaxed font-light">Trafiklärare</p>
        {/* social icon */}
        <div className="mt-2 mb-5 space-x-2 text-white">
          <a className="hover:text-yellow-500" aria-label="Twitter link" href="#">
            {/* <i class="fab fa-twitter text-twitter"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Facebook link"
            href="#"
          >
            {/* <i class="fab fa-facebook text-facebook"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Instagram link"
            href="#"
          >
            {/* <i class="fab fa-instagram text-instagram"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
              />
              <path
                fill="currentColor"
                d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
              />
              <path
                fill="currentColor"
                d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Linkedin link"
            href="#"
          >
            {/* <i class="fab fa-linkedin text-linkedin"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    {/* end team 2 block */}
  </div>
  <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">


    {/* team member 3 block */}
      <div className="relative overflow-hidden px-6">
        <img
        src="/images/me.jpg"
          className="max-w-full h-auto mx-auto rounded-full  "
          alt="title image"
        />
      </div>
      <div className="pt-6 text-center">
        <p className= "text-lg leading-normal font-bold mb-1 text-white">Abdullahi Shakur</p>
        <p className=" text-white leading-relaxed font-light">
          IT-ansvarig
        </p>
        {/* social icon */}
        <div className="mt-2 mb-5 space-x-2 text-white">
          <a className="hover:text-yellow-500" aria-label="Twitter link" href="#">
            {/* <i class="fab fa-twitter text-twitter"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Facebook link"
            href="#"
          >
            {/* <i class="fab fa-facebook text-facebook"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Instagram link"
            href="#"
          >
            {/* <i class="fab fa-instagram text-instagram"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
              />
              <path
                fill="currentColor"
                d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
              />
              <path
                fill="currentColor"
                d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
              />
            </svg>
          </a>
          <a
            className="hover:text-yellow-500"
            aria-label="Linkedin link"
            href="#"
          >
            {/* <i class="fab fa-linkedin text-linkedin"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
              width="1rem"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
              />
            </svg>
          </a>
        </div>
      </div>
    {/* end team member 3 block */}
  </div>

</div>

          {/* end row */}
        </div>
      </div>
    </>
  );
}
