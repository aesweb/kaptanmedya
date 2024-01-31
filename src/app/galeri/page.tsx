import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { ParallaxScrollDemo } from '@/components/parallax-scroll-demo';

export default function Page() {
  return (
    <>
      <section className="w-full">
        <ImagesSliderDemo />
        <ParallaxScrollDemo />
      </section>
    </>
  );
}
