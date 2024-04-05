"use client"
import { Button } from "@/components/ui/button";
import { calculateReadingTime } from "@/lib/readTimeCounter";
import { urlFor } from "@/lib/sanity";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { useRouter } from "next/navigation";

type LatestPostsProps = {
  posts: SanityDocument;
}

export default function LatestPosts({ posts }: LatestPostsProps) { 
  const router = useRouter();

  return (
    <div>
      <div className="mt-14 text-2xl tracking-tight text-white text-opacity-80 max-md:mt-10 max-md:max-w-full">
        Senaste bloggar
      </div>
      <div className="mt-9 max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {posts.map((post: SanityDocument) => (
            <div
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#021035]"
              key={post._id}
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-60 w-full object-cover"
                  src={urlFor(post.titleImage).url()}
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-yellow-500">
                    {post.category?.title} | 
                    <span className="mx-1">
                      {" "}
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      | {calculateReadingTime(post.content)} min läsning
                    </span>
                  </p>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-white line-clamp-3">
                    {post.shortDescription}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={urlFor(post.author.image).url()}
                        alt="Avatar"
                        height={500}
                        width={500}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-white">
                        {post.author?.name}
                      </p>
                      <div className="flex text-sm leading-5 text-white">
                        <span className="mx-1">
                          {post.author?.role.title}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-yellow-500 text-black hover:bg-yellow-600"
                    onClick={() => router.push(`/blog/${post.slug}`)} 
                  >
                    Läs Mer...
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
