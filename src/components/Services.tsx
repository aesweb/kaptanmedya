import React from 'react';
import Image from 'next/image';
const Services = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 py-12 items-center justify-center text-center bg-white text-black">
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={70}
          width={70}
        />
        <div>Servisler</div>
        <div className="text-xl font-light pb-8">
          “MUTLU ANLAR, EKSİKSİZ BİR GÜNLE BAŞLAR”
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="items-center justify-center flex flex-col gap-4">
            <Image
              src="/logo.jpeg"
              alt="kaptanmedyalogosu"
              height={120}
              width={120}
            />
            <div className="text-lg">Servisler</div>
            <div className="text-md px-8">
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
            <div className="text-lg">Servisler</div>
            <div className="text-md px-8">
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
            <div className="text-lg">Servisler</div>
            <div className="text-md px-8">
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
            <div className="text-lg">Servisler</div>
            <div className="text-md px-8">
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
