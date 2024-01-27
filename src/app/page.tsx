import EventCard from '@/components/EventCard';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import OrganizationCard from '@/components/OrganizationCard';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <EventCard />
        <OrganizationCard />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
