import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StepProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ imgSrc, alt, title, description }) => (
  <div className="items-center flex flex-col gap-4">
    <Image
      src={imgSrc}
      alt={alt}
      height={120}
      width={120}
      className="hover:scale-105 transition-all duration-300 ease-in-out"
    />
    <div className="text-2xl">{title}</div>
    <div className="text-md font-light max-w-sm">{description}</div>
  </div>
);

const Steps: React.FC = () => {
  const stepsData: StepProps[] = [
    {
      imgSrc: '/6.webp',
      alt: 'çiçek fotoğrafı',
      title: 'Tanışalım',
      description:
        'Özel günlerinizde ve hikayenizi paylaşmak için kişiselleştirdiğiniz detayları anlatmak için bizi arayabilir, hayalinizi kurduğunuz anları paylaşabilir ve uygun bir zaman dilimi için randevu alabilirsiniz.',
    },
    {
      imgSrc: '/8.webp',
      alt: 'alyans fotoğrafı',
      title: 'Planlayalım',
      description:
        'Bugüne kadar gerçekleştirdiğimiz mutlu hikayeleri inceleyebilir, yüzlerce çiftimizin bıraktığı olumlu yorumları okuyabilirsiniz. Sizin de hayalinizdeki her detayı ofisimizde birlikte planlayarak gerçeğe dönüştürebiliriz.',
    },
    {
      imgSrc: '/7.webp',
      alt: 'kalp fotoğrafı',
      title: 'Gerçekleştirelim',
      description:
        'Sofistike detaylar, çarpıcı ve zarif seçenekler arasından özenle kişiselleştirdiğimiz sunum sonrasında, taahhüt ettiğimiz her detayı o muhteşem günde gerçekleştirebiliriz.',
    },
  ];

  return (
    <section className="bg-white text-black py-12">
      <div className="flex flex-col items-center justify-center text-center px-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          {stepsData.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
        <Link href="/servisler">
          <button className="px-6 my-10 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-[150px]">
            Servislerimiz
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Steps;
