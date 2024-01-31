import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Steps = () => {
  return (
    <section className="bg-white text-black py-12">
      <div className="flex flex-col items-center justify-center text-center px-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
          <div className="items-center flex flex-col gap-4">
            <Image
              src="/6.jpg"
              alt="kaptanmedyalogosu"
              height={120}
              width={120}
              className="hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="text-2xl">Tanisalim</div>
            <div className="text-md font-light max-w-sm">
              Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı
              atarken yanınızdayız…
            </div>
          </div>
          <div className="items-center flex flex-col gap-4">
            <Image
              src="/8.jpg"
              alt="kaptanmedyalogosu"
              height={120}
              width={120}
              className="hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="text-2xl">Planlayalim</div>
            <div className="text-md font-light max-w-sm">
              Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı
              atarken yanınızdayız…
            </div>
          </div>
          <div className="items-center flex flex-col gap-4">
            <Image
              src="/7.jpg"
              alt="kaptanmedyalogosu"
              height={120}
              width={120}
              className="hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className="text-2xl">Gerceklestirelim</div>
            <div className="text-md font-light max-w-sm px-12">
              Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı
              atarken yanınızdayız… atarken yanınızdayız…
            </div>
          </div>
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
