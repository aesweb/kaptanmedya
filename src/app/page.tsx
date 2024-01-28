import EventCard from '@/components/EventCard';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import Navbar from '@/components/Navbar';
import OrganizationCard from '@/components/OrganizationCard';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <Navbar />
      <div className="container mx-auto">
        <ImagesSliderDemo />
        <LayoutGridDemo />
        <Hero />
        <EventCard />
        <OrganizationCard />
        <Services />
      </div>
      <Footer />
    </main>
  );
}
