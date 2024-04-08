import ClientOnly from "@/app/components/ClientOnly";
import { GALLERY_IMAGES_Query } from "@/sanity/lib/queries"
import { loadQuery } from "@/sanity/lib/store"
import { SanityDocument } from "next-sanity"
import GallerySection from "./GallerySection";


const GallerySectionFetched = async () => {
    const initial = await loadQuery<SanityDocument[]>(GALLERY_IMAGES_Query);
    const imageUrls = initial.data.map(doc => doc.galleryImage?.asset?._ref || '');
    return (
        <ClientOnly>
            <GallerySection images={imageUrls} />
        </ClientOnly>
    )
}

export default GallerySectionFetched;