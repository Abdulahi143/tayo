import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { QueryParams, SanityDocument } from "next-sanity";
import {
  CATEGORIES_QUERY,
  Latest_post_query,
  POST_QUERY,
} from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import { draftMode } from "next/headers";
import ClientOnly from "@/app/components/ClientOnly";
import SingleBlogPage from "@/app/components/SingleBlog";
import PostPreview from "@/components/PostPreview";
import LatestPosts from "../../blogs/_components/LatestPosts";

export const revalidate = 30;



export async function generateMetadata({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  const post = initial.data;

  const ogParams = new URLSearchParams()
    ogParams.set("heading", initial.data.title);
  ogParams.set("type", "Blog Post")
  ogParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.summary,
   
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `/blog/${post.slug}`,
      images: [
        {
          url: `/api/og?${ogParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [`/api/og?${ogParams.toString()}`],
    },
  }
}



const BlogPage = async ({ params }: { params: QueryParams }) => {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  // if(!initial || initial.data) {
  //   return {}
  // }

  // const post = initial.data;
  console.log("post", initial);



  const latestInitial = await loadQuery<SanityDocument>(
    Latest_post_query,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  const { data: categories } = await loadQuery<SanityDocument[]>(
    CATEGORIES_QUERY,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  


  

  return draftMode().isEnabled ? (
    <ClientOnly>
      <div className="flex flex-col items-center px-16 pt-4 md:pt-20 pb-10 max-md:px-5">
        <div className="flex flex-col mt-11 w-full max-w-[1470px] max-md:mt-10 max-md:max-w-full">
          <PostPreview initial={initial} params={params} />
        </div>
      </div>
    </ClientOnly>
  ) : (
    <ClientOnly>
      <div className="flex flex-col items-center px-16 pt-4 md:pt-20 pb-10 max-md:px-5">
        <div className="flex flex-col mt-11 w-full max-w-[1470px] max-md:mt-10 max-md:max-w-full">
          <SingleBlogPage post={initial.data} categories={categories} />

          <div className="flex gap-5 justify-between mt-24 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5">
              <div className="grow my-auto text-2xl tracking-tight text-white text-opacity-80">
                Dela på
              </div>
              <div className="flex gap-4 items-center text-yellow-500">
                <FaFacebook className="shrink-0 h-10 self-stretch my-auto w-10 aspect-square" />
                <FaWhatsapp className="shrink-0 h-10 self-stretch my-auto w-10 aspect-square" />
                <BsTwitterX className="shrink-0 h-10 self-stretch my-auto w-10 aspect-square" />
              </div>
            </div>
          </div>

          {/* Latest posts should be here */}
          <LatestPosts posts={latestInitial.data} />
        </div>
      </div>
    </ClientOnly>
  );
};

export default BlogPage;
