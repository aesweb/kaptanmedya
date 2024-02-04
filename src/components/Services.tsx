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
    <div className="text-xl font-normal">{title}</div>
    <div className="text-md font-light italic max-w-sm px-12">
      {description}
    </div>
  </div>
);

const Services: React.FC = () => {
  const serviceItems: ServiceItemProps[] = [
    {
      imgSrc: '/services/1.webp',
      alt: 'Düğün Çiçeği',
      title: 'Düğün Organizasyonu',
      description:
        'Mutlu anlar, eksiksiz bir günle başlar. Evliliğe ilk adımınızı atarken yanınızdayız…',
    },
    {
      imgSrc: '/services/2.webp',
      alt: 'kına gecesi organizasyonu',
      title: 'Kına Gecesi',
      description:
        'Hayatınızın en mutlu anına, o müthiş heyecana saatler kalan davetlilerinize harika bir gece yaşatalım…',
    },
    {
      imgSrc: '/services/3.webp',
      alt: 'nazar boncuğu',
      title: 'Sünnet Organizasyonu',
      description:
        'İlk adımını atarken duyduğunuz gurur ve mutluluğu sünnet töreninde birlikte taçlandıralım…',
    },
    {
      imgSrc: '/services/4.webp',
      alt: 'alyans fotografı',
      title: 'Nişan Organizasyonu',
      description:
        'Evlilik öncesi heyecanınız birikerek çoğalırken, en özel anlarınızı birlikte planlayalım…',
    },
    {
      imgSrc: '/services/5.webp',
      alt: 'ışık ses ve görüntü sistemleri',
      title: 'Işık, Ses ve Görüntü',
      description:
        'Mekan ışık, ses ve görüntü sistemlerinde profesyonel ekibimiz ve trend ekipmanlarla yanınızdayız…',
    },
    {
      imgSrc: '/services/6.webp',
      alt: 'Servis Tabağı',
      title: 'Catering',
      description:
        'Özel davetlerinize, seçkin gurme lezzetlerle birlikte unutamayacakları muhteşem bir ziyafet yaşatalım…',
    },
    {
      imgSrc: '/services/7.webp',
      alt: 'baby yazılı logo',
      title: 'Baby Shower',
      description:
        'Birbirinden özel renkleri ile unutulamayacak bu özel konsepti yıllar sonra bile konuşacaksınız…',
    },
    {
      imgSrc: '/services/8.webp',
      alt: 'happy birthday yazılı logo',
      title: 'Doğum Günü',
      description:
        'Her yaşın mutluluk getirdiği özel günleriniz için kişiselleştirilmiş tasarımlar ve konseptler sunuyoruz…',
    },
    {
      imgSrc: '/services/9.webp',
      alt: 'disko topu',
      title: 'Parti',
      description:
        'Kalite eğlencenin düzenli ve eksiksiz ritüelleri ile sizlere muhteşem bir parti organizasyonu hazırlayalım…',
    },
    {
      imgSrc: '/services/10.webp',
      alt: 'profesyonel mikrofon fotografı',
      title: 'Sanatçı',
      description:
        'Hayranı olduğunuz sanatçıları, özel günlerinize dahil edelim ve hikayenizi unutulmaz kılalım…',
    },
    {
      imgSrc: '/services/11.webp',
      alt: 'ödüllü kupa',
      title: 'Kurumsal Organizasyonlar',
      description:
        'Kurumsal davet, organizayson, açılış töreni ve toplantılarınıza en uygun, eksiksiz çözümler planlayalım…',
    },
    {
      imgSrc: '/services/12.webp',
      alt: 'mezuniyet şapkası',
      title: 'Mezuniyet',
      description:
        'Hayat başlıyor, öncesinde kepleri fırtlatma zamanı geldi… Bu özel anın her dakikasını unutulmaz kılalım…',
    },
  ];

  return (
    <section className="bg-white text-black py-12">
      <div className="flex flex-col items-center justify-center text-center px-12">
        <div className="text-4xl font-normal py-12">Servislerimiz</div>
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
