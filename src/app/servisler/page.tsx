import EventCard from '@/components/EventCard';
import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import Services from '@/components/Services';

export default function Page() {
  return (
    <section className="w-full">
      <ImagesSliderDemo />
      <EventCard />
      <Services />
    </section>
  );
}
