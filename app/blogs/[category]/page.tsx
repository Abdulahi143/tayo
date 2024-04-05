import { QueryParams, SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { draftMode } from "next/headers";
import ClientOnly from "@/app/components/ClientOnly";
import PostsPreview from "@/components/PostPreview";
import { SORT_WITH_CATEGORIES } from "@/sanity/lib/queries";
import BlogContent from "@/app/components/BlogContent";

export const revalidate = 30;

const CategoryPage = async ({ params }: { params: QueryParams }) => {
  const categoryId = params.category;
  if (!categoryId) {
    return <div>No category ID provided</div>;
  }

  try {
    const initial = await loadQuery<SanityDocument[]>(SORT_WITH_CATEGORIES, {
      categoryId,
    });
    if (!initial || !initial.data || initial.data.length === 0) {
      throw new Error("No data found for the given category ID");
    }
    const posts = initial.data[0].posts;
    return draftMode().isEnabled ? (
      <ClientOnly>
        <h1>ABaba</h1>
      </ClientOnly>
    ) : (
      <ClientOnly>
        {posts && <BlogContent sanityPosts={posts} />}
      </ClientOnly>
    );
  } catch (error) {
    console.error("Error loading category and posts:", error);
    return <div>Error loading category and posts:</div>;
  }
};

export default CategoryPage;