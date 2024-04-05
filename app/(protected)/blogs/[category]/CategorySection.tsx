import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Categories from "../_components/Categories";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";

const CategorySection = async () => {
  const { data: sanityDocuments } = await loadQuery<SanityDocument[]>(CATEGORIES_QUERY, {});
  
  // Map SanityDocument objects to Category objects
  const categories = sanityDocuments.map((doc: SanityDocument) => ({
    _id: doc._id, // Assuming _id is available in the SanityDocument
    title: doc.title, // Assuming title is available in the SanityDocument
  }));

  return <Categories categories={categories} />;
};

export default CategorySection;
