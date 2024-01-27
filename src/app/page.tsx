import EventCard from '@/components/EventCard';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="overflow-hidden container mx-auto bg-white text-black">
      <Navbar />
      <Hero />
      <EventCard />
      main
      <Footer />
    </main>
  );
}
