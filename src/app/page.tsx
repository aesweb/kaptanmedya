import Contact from '@/components/Contact';
import EventCard from '@/components/EventCard';
import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import OrganizationCard from '@/components/OrganizationCard';
import OrganizationCardTwo from '@/components/OrganizationCardTwo';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <EventCard />
      <OrganizationCardTwo />
      <LayoutGridDemo />
      <OrganizationCard />
      <Services />
      <Contact />
    </>
  );
}
