"use client";

import BlogContent from "@/app/components/BlogCard";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";


export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    POSTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <div className="mt12">
    <BlogContent sanityPosts={data} />

    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}