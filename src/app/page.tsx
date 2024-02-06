import Contact from '@/components/Contact';
import EventCard from '@/components/EventCard';
import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import OrganizationCard from '@/components/OrganizationCard';
import OrganizationCardTwo from '@/components/OrganizationCardTwo';
import Steps from '@/components/Steps';
import Whatsapp from '@/components/Whatsapp';

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <EventCard />
      <OrganizationCardTwo />
      <LayoutGridDemo />
      <OrganizationCard />
      <Steps />
      <Contact />
      <Whatsapp />
    </>
  );
}
