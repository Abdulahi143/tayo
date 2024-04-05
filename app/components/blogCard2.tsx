"use client";

import { calculateReadingTime } from "@/lib/readTimeCounter";
import { urlFor } from "@/lib/sanity";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface BlogProps {
  sanityPosts: SanityDocument[];
  categoryId?: string;
}



const BlogCard2 = ({ sanityPosts, categoryId }: BlogProps) => { 
  const router = useRouter();
  return (
    <>

          <section className="">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">
                Andra design blogg
              </h1>
              {sanityPosts.map((post) => {
        return (

              <div className="mt-8 lg:-mx-6 lg:flex lg:items-center" key={post._id}>
                <Image
                className="h-60 w-full object-cover"
                src={urlFor(post.titleImage).url()}
                alt=""
                height={500}
                width={500}
              />
                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                  <p className="text-sm text-yellow-500 uppercase">
                    {" "}
                    {post.category.title} ·  {" "}
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        · {calculateReadingTime(post.content)} min läsning
                  </p>
                  <a
                    href="#"
                    className="block mt-4 text-2xl font-semibold hover:underline text-white md:text-3xl"
                  >
                    {post.title}
                  </a>
                  <p className="mt-3 text-sm text-white md:text-sm">
                    {post.shortDescription}
                  </p>
                  <Link
                    href={(`/blog/${post.slug}`)}
                    className="inline-block mt-2 text-yellow-500 underline hover:text-yellow-400"
                  >
                    Läs mer 
                  </Link>
                  <div className="flex items-center mt-6">
                   <Image
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src={
                        post.author.image
                          ? urlFor(post.author.image).url()
                          : "/images/me.jpg"
                      }
                      alt="AUthor Image"
                      height={500}
                      width={500}
                    />
                    <div className="mx-4">
                      <h1 className="text-sm text-white">
                        {post.author.name}
                      </h1>
                      <p className="text-sm text-gray-400">
                      {/* {post.author.role.title} */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        );
    })}
              
            </div>
          </section>

    </>
  );
};

export default BlogCard2;
