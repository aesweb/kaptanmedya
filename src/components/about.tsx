import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4 items-center text-center bg-white text-black px-12">
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={100}
          width={100}
        />
        <div className="text-lg">Kaptan Medya</div>
        <div className="text-xl pb-4">
          ''siz hayal edin kaptanmedya organizasyon gerceklestirsin''
        </div>
        <div className="text-md max-w-2xl font-thin">
          Zarif, şık, çekici, eğlenceli ve çarpıcı bir gerçeklik ile rüya gibi
          bir kutlama planlayarak zamanın çok ötesinde her detayı ile sofistike
          <br />
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque
          debitis culpa, soluta sint est obcaecati iste voluptate exercitationem
          enim?
          <br />
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          sapiente enim officiis, reiciendis dolores tempora quam qui eveniet
          quos soluta.
        </div>
      </div>
    </section>
  );
};

export default About;
