
import PartnersSection from "./_components/PartnersSection";
import AboutSection from "./_components/about/AboutSection";
import ContactSection from "./_components/contact/ContactSection";
import { CoursesSection } from "./_components/coureses/CoursesSection";
import GallerySectionFetched from "./_components/gallery/GalleryFecthed";
import Hero from "./_components/hero/Hero";
import ClientOnly from "./components/ClientOnly";


export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      <CoursesSection />
      <AboutSection />
      <ContactSection />
      <PartnersSection />
      <GallerySectionFetched />
    </ClientOnly>
  );
}
