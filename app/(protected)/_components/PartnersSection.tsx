import Image from "next/image";
import Link from "next/link";

const PartnersSection = () => {
    return ( 
        <section className="py-4">
            
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-14 text-center">
    <h1 className="text-center text-amber-400 text-[35px] font-bold font-montserrat leading-[56px]">
Samarbete och stöd
</h1>
    </div>
    <div className="grid grid-cols-2  justify-center  items-center  gap-12 md:grid-cols-3  xl:grid-cols-none xl:flex xl:justify-between">
      <Link href="#" className="flex justify-center items-center">
        <Image src="/images/borlangelogo.png" alt="borlängelogo" height={9} width={200}/>

     </Link>
      <Link href="#" className="flex justify-center items-center">
      <Image src="/images/abflogo.png" alt="borlängelogo" height={9} width={200} className="rounded-3xl"/>
     </Link>
      <Link href="#" className="flex justify-center items-center ">
              <Image src="/images/alrahmalogo.png" alt="borlängelogo" height={9} width={200} className="rounded-3xl"/>
              
     </Link>
      <Link href="#" className="flex justify-center items-center">
              <Image src="/images/borlangelogo.png" alt="borlängelogo" height={9} width={200}/>
     </Link>
    </div>
  </div>
</section>

     );
}
 
export default PartnersSection;