import EventCard from '@/components/EventCard';
import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import OrganizationCard from '@/components/OrganizationCard';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <EventCard />
      <LayoutGridDemo />
      <OrganizationCard />
      <Services />
    </>
  );
}
