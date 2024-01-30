import React from 'react';
import Image from 'next/image';
const Services = () => {
  return (
    <div className="bg-white text-black py-24">
      <div className="flex flex-col items-center justify-center text-center px-12">
        <div className="text-3xl font-semibold py-12">Servislerimiz</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          <div className="items-center justify-center flex flex-col gap-4">
            <Image
              src="/logo.jpeg"
              alt="kaptanmedyalogosu"
              height={120}
              width={120}
            />
            <div className="text-2xl">Servisler</div>
            <div className="text-md font-light max-w-sm">
              Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı
              atarken yanınızdayız…
            </div>
          </div>
          <div className="items-center justify-center flex flex-col gap-4">
            <Image
              src="/logo.jpeg"
              alt="kaptanmedyalogosu"
              height={120}
              width={120}
            />
            <div className="text-2xl">Servisler</div>
            <div className="text-md font-light max-w-sm">
              Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı
              atarken yanınızdayız…
            </div>
          </div>
          <div className="items-center justify-center flex flex-col gap-4">
            <Image
              src="/logo.jpeg"
              alt="kaptanmedyalogosu"
              height={120}
              width={120}
            />
            <div className="text-2xl">Servisler</div>
            <div className="text-md font-light max-w-sm">
              Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı
              atarken yanınızdayız…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
