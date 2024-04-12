"use client"
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";

import Link from "next/link";
import { calculateReadingTime } from "@/lib/readTimeCounter";
import { urlFor } from "@/lib/sanity";


export default function SingleBlogPage({ post, categories  }: { post: SanityDocument, categories?: SanityDocument[] }) {
  return (  
    <div className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-9 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className="text-5xl font-bold tracking-tighter leading-tight text-white max-w-full md:max-w-[80%] md:text-4xl gap-y-2 flex flex-col">
                {post.title}
              </div>

              <div className="flex gap-5 justify-between mt-4 w-full text-2xl tracking-tight max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3.5 items-center my-auto">
                  <div className="sm:text-md flex-auto self-stretch my-auto text-white leading-[150%]" key={post.category._id}>
                    {post.category.title}
                    <div className=" flex-auto self-stretch my-auto text-white text-opacity-50">
                      {" "}
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      · {calculateReadingTime(post.content)} min läsning
                    </div>
                  </div>
                </div>
                <div className="shrink-0 bg-yellow-300 border border-yellow-300 border-solid h-[50px] w-[11px]" />
              </div>
            </div>
            <Image
              className="mt-4 max-w-full aspect-[2] w-[1109px] rounded-xl"
              src={urlFor(post.titleImage).url()}
              alt=""
              height={500}
              width={500}
            />

            <div className="flex mt-4 gap-3.5 items-center my-auto">
              <Image
                      className="h-10 w-10 rounded-full"
                      src={
                          urlFor(post.author.image).url()
                      }
                      alt="Avatar"
                      height={500}
                      width={500}
                      priority={true}
                    />
              <div className="grow self-stretch my-auto text-white">
                {post.author.name}
                <p className="text-sm text-gray-400">
                  {post.author.role.title}
                </p>
              </div>
            </div>
            <div className="mt-6 mr-14 text-lg tracking-tight leading-8 text-white text-opacity-80 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <PortableText value={post.content} />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-16 text-lg tracking-tight leading-9 text-yellow-500 max-md:mt-10 ">
            <div className="text-3xl font-bold tracking-tight leading-9 text-white">
              Kategorier
            </div>
            <div className="mt-8">
              {categories?.map(category => (
                <Link href={`/blogs/${category._id}`} key={category._id}>
                  <h2 className="hover:underline cursor-pointer">
                    {category.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
