import PartnersSection from "./(protected)/_components/PartnersSection";
import AboutSection from "./(protected)/_components/about/AboutSection";
import ContactSection from "./(protected)/_components/contact/ContactSection";
import { CoursesSection } from "./(protected)/_components/coureses/CoursesSection";
import GallerySection from "./(protected)/_components/gallery/GallerySection";
import Hero from "./(protected)/_components/hero/Hero";
import ClientOnly from "./components/ClientOnly";


export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      <CoursesSection />
      <AboutSection />
      <ContactSection />
      <PartnersSection />
      <GallerySection />
    </ClientOnly>
  );
}
