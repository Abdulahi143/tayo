"use client"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"


const GallerySection = () => {
  const Courses = [
    {
      image: "/gallery/11.png",
    },
    {

      image: "/gallery/12.png",
    },
    {
      image: "/gallery/14.png",
    },
    {
      image: "/gallery/15.png",
    },
    {
      
      image: "/gallery/16.png",
    },
    {
      
      image: "/gallery/17.png",
    },
    {
      
      image: "/gallery/18.png",
    },
    {
      
      image: "/gallery/19.png",
    },
    {
      
      image: "/gallery/20.png",
    },
    {
      
      image: "/gallery/21.png",
    },
    {
      
      image: "/gallery/22.png",
    },
    {
      
      image: "/gallery/23.png",
    },
    {
      image: "/gallery/2.png",
    },
  ];

  const [key, setKey] = useState(0);

  const [isLgOrXlScreen, setIsLgOrXlScreen] = useState(
    window.innerWidth >= 1024
  );

    const handleResize = () => {
    setIsLgOrXlScreen(window.innerWidth >= 1024);
    setKey((prevKey) => prevKey + 1); // Force a re-render of the Carousel component
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    return ( 
      <>
      <div className="mt-8 border-b-[1px] border-[#FFC52C]">
        <h1 className="text-center py-4 text-amber-400 text-[35px] font-bold font-montserrat leading-[56px]">
          Galleri
        </h1>
        <Carousel
          plugins={[plugin.current]}
          key={isLgOrXlScreen ? "large" : "small"}
          className={
            isLgOrXlScreen
              ? "w-full max-w-sm m-auto md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
              : "w-full max-w-2xs m-auto"
          }
        >
          <CarouselContent className="-ml-1 mb-12">
            {Courses.map(({  image }, index) => (
              <CarouselItem
                key={index}
                className={isLgOrXlScreen ? "pl-1 md:basis-1/2 lg:basis-1/3" : "pl-1 basis-full"} 
              >
                <div className="p-1">
                <Card>
                <div className="relative aspect-square">
          <Image
            src={image}
            alt={"galary Images"}
            objectFit="cover"
            layout="fill"
            quality={100}
            className="rounded-xl"
          />
        </div>
</Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}

export default GallerySection;