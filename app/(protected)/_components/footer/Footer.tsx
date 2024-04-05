import { Sansita_Swashed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutubeSquare } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const sansita = Sansita_Swashed({
  subsets: ["latin"],
});

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#010922]  w-full py-14 bottom-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="#" className="flex justify-center ">
            <Image
              className="lg:block hidden"
              src="/images/logo_tayo.png"
              height="50"
              width="50"
              alt="Logo"
            />
      <h1 className={`${sansita.className} text-white ml-2 text-2xl inline-flex gap-x-2 md:text-4xl md:block`}> {/* sm:block hidden hides the text on small screens */}

              {" "}
              {/* sm:block hidden hides the text on small screens */}
              Tayo <span className="text-[#FFC52C]">Förening</span>
            </h1>
          </Link>
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-yellow-500">
            <li></li>
            <li>
              <Link
                href="/courses"
                className=" text-white hover:text-yellow-500"
              >
                Utbildningar
              </Link>
            </li>
            <li>
              <Link href="/blogs" className=" text-white hover:text-yellow-500">
                Bloggar
              </Link>
            </li>
            <li>
              <Link href="/about" className=" text-white hover:text-yellow-500">
                Om Tayo
              </Link>
            </li>
            <li>
              <Link href="/about" className=" text-white hover:text-yellow-500">
                Villkor
              </Link>
            </li>
          </ul>
          <div className="flex space-x-10 justify-center items-center mb-14">
            <Link
              href="#"
              className="block  text-white transition-all duration-500 hover:text-yellow-600 "
            >
              <FaXTwitter className="w-[1.688rem] h-[1.688rem]" />
            </Link>
            <Link
              href="#"
              className="block  text-white transition-all duration-500 hover:text-yellow-600 "
            >
              <FaYoutubeSquare className="w-[1.688rem] h-[1.688rem]" />
            </Link>
            <Link
              href="#"
              className="block  text-white transition-all duration-500 hover:text-yellow-600 "
            >
              <FaFacebook className="w-[1.688rem] h-[1.688rem]" />
            </Link>
            <Link
              href="#"
              className="block  text-white transition-all duration-500 hover:text-yellow-600 "
            ></Link>
          </div>
          <span className="text-lg text-gray-500 text-center block">
            ©Tayo Förening Borlänge {currentYear} | Utvecklad av Abdullahi Shakur |
            0736269711.
          </span>
        </div>
      </div>
    </footer>
  );
};

