import { CheckCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

interface FeatureProps {
  text: string;
}

const AboutSection = () => {
  const renderFeature = ({ text }: FeatureProps) => (
    <div className="flex items-center">
      <CheckCircledIcon className="w-6 h-6 mr-3 text-white" />
      <p className="text-white">{text}</p>
    </div>
  );

  return (
    <>
    <h1 className="text-center py-4 text-amber-400 text-[35px] font-bold font-montserrat leading-[56px]">
Om Tayo
</h1>
<div className="py-8 pb-12 z-0 border-b-[1px] border-[#FFC52C]">
<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
<div className="md:5/12 lg:w-5/12">
<Image
  src="/images/tayoo.jpg"
  alt="image"
  className="w-full rounded-2xl"
  width="500"
  height="500"
/>
</div>
<div className="md:7/12 lg:w-6/12">
<h2 className="text-2xl text-white font-bold md:text-4xl">
Erbjuder Bästa Stöd
</h2>
<p className="mt-6 text-white">
Att ge stöd till nyanlända med integration och att lära sig
        språket är vårt uppdrag. Att ge stöd till nyanlända med
        integration och att lära sig språket är vårt uppdrag.
</p>
<p className="mt-4 text-white">
  {" "}
  Att ge
        stöd till nyanlända med integration och att lära sig språket
        är vårt uppdrag. Att ge stöd till nyanlända med integration
        och att lära sig språket är vårt uppdrag.
</p>
<Link
        href="/about/#"
        className="inline-flex items-center mt-4 justify-center py-3 text-base font-medium text-center text-black border border-transparent rounded-md px-7 bg-yellow-500 hover:bg-opacity-90"
      >
        Läs mer...
      </Link>
</div>
</div>
</div>
</div>
</>
  );
};

export default AboutSection;