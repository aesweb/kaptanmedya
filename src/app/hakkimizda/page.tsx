import { ImagesSliderDemo } from '@/components/ImagesSliderDemo';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import Steps from '@/components/Steps';

export default function Page() {
  return (
    <section className="w-full">
      <ImagesSliderDemo />
      <LayoutGridDemo />
      <Steps />
    </section>
  );
}
