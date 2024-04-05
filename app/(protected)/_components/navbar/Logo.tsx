'use client';

import { Sansita_Swashed } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const sansita = Sansita_Swashed({
  subsets: ["latin"],
});

const Logo = () => {
  const router = useRouter();

  return ( 
    <div  onClick={() => router.push('/')} className="flex flex-col sm:flex-row items-center cursor-pointer">
      <Image
       
        className="lg:block hidden" 
        src="/images/logo_tayo.png"
        height="50" 
        width="50" 
        alt="Logo" 
      />
      <h1 className={`${sansita.className} text-white ml-2 text-2xl inline-flex gap-x-2 md:text-4xl md:block`}> {/* sm:block hidden hides the text on small screens */}
        Tayo <span className="text-[#FFC52C]">Förening</span>
      </h1>
    </div>
  );
}
 
export default Logo;