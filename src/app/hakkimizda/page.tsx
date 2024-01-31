import Contact from '@/components/Contact';
import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import Steps from '@/components/Steps';
import About from '@/components/about';

export default function Page() {
  return (
    <>
      <ImagesSliderDemo />
      <About />
      <LayoutGridDemo />
      <Contact />
      <Steps />
    </>
  );
}
