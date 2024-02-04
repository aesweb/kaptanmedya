import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OrganizationCardTwo = () => {
  return (
    <section className="py-12 w-11/12">
      <div className="flex flex-col items-center justify-center gap-12 px-12 py-12 xl:gap-32 xl:flex-row rounded-lg bg-[#f5f3ef]">
        <Image
          src="/gallery/4.webp"
          alt="suslu masa fotografi"
          height={500}
          width={500}
          className="rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="gap-12 flex flex-col">
          <div>
            <div className="mb-6 text-xl">Wedding Ceremony</div>
            <div className="text-4xl">DÜĞÜN & DAVET</div>
          </div>
          <div className="max-w-xl text-md">
            Hayalini kurduğunuz düğün, unutulmaz anları, ilk dansınız, aileler
            ve konuklarınız ile birlikte unutulmayacak bir gün ve hatırladıkça
            mutluluk yaşatacak muhteşem bir gece için sizlerle birlikteyiz.
            Bugüne kadar mutluluk içerisinde evliliğe ilk adımını atan yüzlerce
            çiftimizin yanında olduğumuz gibi…
          </div>
          <Link href="/servisler">
            <button className="px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-[150px]">
              Servislerimiz
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrganizationCardTwo;
