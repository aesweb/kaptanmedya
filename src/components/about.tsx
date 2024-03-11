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
          Düğün Organizasyonunuz için sunduğumuz birbirinden güzel hizmetler
          eşliğinde, unutulmayacak kadar güzel bir masalın prensi ve prensesi
          olmaya hazır mısınız? Kaptan Medya Organizasyon olarak, isteklerinize
          önem veren yetenekli bir ekibe sahibiz. Bu ekibimizle düğününüzde sizi
          mutlu etmek, eğlendirmek ve tüm dostlarınızla keyifli anlar yaşamanızı
          sağlamak için titiz bir çalışma yürütüyoruz.
          <br />
          <br />
          Peki bizimle iletişime geçtiğiniz andan itibaren sürecimiz nasıl
          ilerliyor? <br />
          <br />
          Öncelikle ilk olarak size kısa bir bilgilendirme yapıyoruz. Daha sonra
          da hem sizi daha yakından tanımak hem de hizmet detaylarını anlatmak
          için bir ön görüşme tarihi belirliyoruz. Görüşmemiz sırasında düğün
          konseptinizi belirlemekle işe koyuluyor, daha sonra ihtiyaçlarınızı
          karşılayabileceğiniz paketlerimiz hakkında bilgi veriyoruz. Bu
          paketlerimizden bütçenize göre dilediğinizi seçebiliyorsunuz. <br />
          <br />
          Konseptlerimizde şu hizmetler yer alıyor; şık bir masa konsepti,
          Supla, peçete, şamdan, canlı çiçek aranjmanı, yürüyüş yolları, ışık
          sistemleri, dj, orkestra özel görsel model imkanlarına Kaptan Medya
          aracılığıyla sahip olabiliyorsunuz. Düğün organizasyonu konusunda
          tecrübeli olan ekibimizin, baştan sona akış planını da yaptıklarını
          söyleyelim.
          <br />
          <br /> Organizasyonlara getirdiğimiz yeni bakış açımız ve
          konseptlerimizle o değerli geceyi eşsiz ve unutulmayacak hâle
          getireceğimizden eminiz. Mekân süslemesinden ikramlara, dans
          gösterilerinden giriş müziğine geniş hizmet yelpazemizden yararlanarak
          stressiz bir süreç geçirebilirsiniz. Kısacası siz ne hayal
          ettiklerinizi bize söyleyin ve hiçbir ayrıntıyı düşünmeden bu değerli
          günün keyfini çıkarın.
          <br />
          <br />
          Eğer Kaptan Medya Darıca firmamız hakkında daha fazla bilgi almak ve
          fiyatlarımızı öğrenmek isterseniz, sayfanın sağ alt kısmında bulunan
          whatsapp butonuna tıklayarak bize ulaşabilirsiniz. Whatsapp dışında
          sayfadaki telefon numarası üzerinden de bizimle iletişime
          geçebileceğinizin bilgisini verelim.
        </div>
      </div>
    </section>
  );
};

export default About;
