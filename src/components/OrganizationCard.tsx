import React from 'react';
import Image from 'next/image';

const OrganizationCard = () => {
  return (
    <div className="py-12 bg-[#ab632d26] w-full">
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
        </div>
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default OrganizationCard;
