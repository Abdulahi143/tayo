import { QueryParams, SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { draftMode } from "next/headers";
import { CATEGORIES_QUERY, POSTS_QUERY, SORT_WITH_CATEGORIES } from "@/sanity/lib/queries";
import ClientOnly from "@/app/components/ClientOnly";
import BlogContent from "@/app/components/BlogCard";
import PostsPreview from "@/components/PostsPreview";
// import Categories from "@/app/components/Categories";

export const revalidate = 30;

export default async function BlogPage() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);
  
  return draftMode().isEnabled ? (
    <ClientOnly>
    <PostsPreview initial={initial} />

    </ClientOnly>
  ) : (
    <ClientOnly>
  
          <BlogContent sanityPosts={initial.data} />
      {/* <BlogCard2 sanityPosts={initial.data} /> */}
    </ClientOnly>
  );
}
