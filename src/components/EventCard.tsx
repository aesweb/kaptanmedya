import React from 'react';
import Image from 'next/image';

const EventCard = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 py-12 items-center text-center bg-white text-black ">
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={70}
          width={70}
        />
        <div>kaptanmedya</div>
        <div className="text-xl font-light">EVENT ORGANIZATION</div>
        <div className="text-sm max-w-2xl font-thin">
          Zarif, şık, çekici, eğlenceli ve çarpıcı bir gerçeklik ile rüya gibi
          bir kutlama planlayarak zamanın çok ötesinde her detayı ile sofistike
          ve eksiksiz çözümler sunuyoruz. Sizlere rehberlik eden ekibimiz, bütün
          ritüelleri planlamanıza yardımcı olacak aynı zamanda bu bütünün
          eğlenceli bir parçası olarak odaklanmanızı kolaylaştıracaktır.
        </div>
      </div>
    </div>
  );
};

export default EventCard;
