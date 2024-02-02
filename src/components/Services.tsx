import React from 'react';
import Image from 'next/image';

interface ServiceItemProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  imgSrc,
  alt,
  title,
  description,
}) => (
  <div className="items-center justify-center flex flex-col gap-4">
    <Image src={imgSrc} alt={alt} height={120} width={120} />
    <div className="text-2xl">{title}</div>
    <div className="text-md font-light max-w-sm px-12">{description}</div>
  </div>
);

const Services: React.FC = () => {
  const serviceItems: ServiceItemProps[] = [
    {
      imgSrc: '/logo.jpeg',
      alt: 'kaptanmedyalogosu',
      title: 'Servisler',
      description:
        'Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı atarken yanınızdayız…',
    },
    // Add more service items as needed
  ];

  return (
    <section className="bg-white text-black py-12">
      <div className="flex flex-col items-center justify-center text-center px-12">
        <div className="text-3xl font-semibold py-12">Servislerimiz</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          {serviceItems.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
