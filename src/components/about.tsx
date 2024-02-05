import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4 items-center text-center bg-white text-black px-12">
        <Image
          src="/logo.png"
          alt="kaptanmedyalogosu"
          height={100}
          width={100}
        />
        <div className="text-lg">Kaptan Medya</div>
        <div className="text-xl pb-4">
          'Siz hayal edin Kaptan Medya Organizasyon gerçekleştirsin.'
        </div>
        <div className="text-md max-w-2xl font-thin">
          Zarif, şık, çekici, eğlenceli ve çarpıcı bir gerçeklik ile rüya gibi
          bir kutlama planlayarak zamanın çok ötesinde her detayı ile sofistike
          bir estetikle planlıyoruz.
          <br />
          <br />
          <br />
          Hayallerinizdeki kutlamayı gerçeğe dönüştürürken, her detayı özenle
          düşünüyor ve planlıyoruz. Kaptan Medya, zarafetin, şıklığın ve
          eğlencenin mükemmel bir birleşimini sunmak için size hizmet sunuyor.
          <br />
          <br />
          <br />
          Kaptan Medya, hayatınızdaki her anın kıymetini biliyor ve bu anları
          daha da özel kılmak için burada. Mutluluğunuzu paylaşma ayrıcalığını
          bizimle yaşayın. Kaptan Medya olarak sizinle geçirdiğimiz her an, özel
          ve unutulmaz olacak.
        </div>
      </div>
    </section>
  );
};

export default About;
