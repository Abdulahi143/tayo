"use client";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function CoursesSection() {
  const Courses = [
    {
      title: "Körlektion",
      subtitle: "Stöd med körlektioner, risk 1 och risk 2...",
      image: "/images/course1.jpg",
    },
    {
      title: "Samhällsorienterad utbildningar",
      subtitle: "Samhällsorienterade ämnen komvux...",
      image: "/images/course2.jpg",
    },
    {
      title: "KunskapsProv",
      subtitle:
        "Förbred dig till kunskapsprov genom att träna och att få stöd och hjälp på somaliska...",
      image: "/images/course3.jpg",
    },
  ];
  const [key, setKey] = useState(0);

  const [isLgOrXlScreen, setIsLgOrXlScreen] = useState(
    window.innerWidth >= 1024
  );


  const handleResize = () => {
    setIsLgOrXlScreen(window.innerWidth >= 1024);
    setKey((prevKey) => prevKey + 1); 
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" border-b-[1px] border-[#FFC52C]">
      <h1 className="text-center py-4 text-amber-400 text-[35px] font-bold font-montserrat leading-[56px]">
        Utbildningar
      </h1>
      <Carousel
        key={isLgOrXlScreen ? "large" : "small"}
        className={
          isLgOrXlScreen
            ? "w-full max-w-sm m-auto md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
            : "w-full max-w-2xs m-auto"
        }
      >
        <CarouselContent className="-ml-1 mb-12">
          {Courses.map(({ title, subtitle, image }, index) => (
            <CarouselItem
              key={index}
              className={isLgOrXlScreen ? "pl-1 md:basis-1/2 lg:basis-1/3" : "pl-1 basis-full"} 
            >
              <div className="p-1">
                <Card>
                  <CardContent 
                    className="flex aspect-square items-center justify-center p-6 rounded-xl relative hover-effect"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 overlay"></div>
                    <div
                      className="text-white text-center z-10 zoom-text"
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 255, 0.5)" }}
                    >
                      <h1 className="text-2xl  font-montserrat">{title}</h1>
                      <span className="text-lg font-montserrat line-clamp-2">
                        {subtitle}
                      </span>
                      <Button className="mt-4 bg-white text-blue-600 hover:bg-[#FFD700]">
                        Läs mer...
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {isLgOrXlScreen ? null : <CarouselPrevious />}
        {isLgOrXlScreen ? null : <CarouselNext />}
        {!isLgOrXlScreen && <CarouselPrevious />}
        {!isLgOrXlScreen && <CarouselNext />}
      </Carousel>
    </div>
  );
}
