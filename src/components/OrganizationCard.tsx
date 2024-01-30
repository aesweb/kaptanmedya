import React from 'react';
import Image from 'next/image';

const OrganizationCard = () => {
  return (
    <div className="py-12 bg-[#f5f3ef] w-11/12 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-12 px-12 py-12 xl:gap-32 xl:flex-row">
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
          <button className="px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-[150px]">
            Servislerimiz
          </button>
        </div>
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={500}
          width={500}
          className="rounded-xl hover:scale-105"
        />
      </div>
    </div>
  );
};

export default OrganizationCard;
