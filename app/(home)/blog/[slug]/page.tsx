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
import { Metadata } from "next";
import { urlFor } from "@/lib/sanity";

export const revalidate = 30;

export async function generateMetadata({ params }: { params: QueryParams }): Promise<Metadata> {
  const blog = await loadQuery<SanityDocument>(POST_QUERY, params, {
  });
  const title = blog?.data.title;
  const description = blog?.data.shortDescription;
  const imageUrl = urlFor(blog.data.titleImage).url()
console.log("imageUrl: ", imageUrl);

  return {
    title: title,
    description: description,
    openGraph: {
      images: [imageUrl],
    },
  }
}



const BlogPage = async ({ params }: { params: QueryParams }) => {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });



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
