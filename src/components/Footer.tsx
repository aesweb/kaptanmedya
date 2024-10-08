import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="gap-8 border border-t-gray-500 flex flex-col items-left sm:items-center justify-center py-12 px-16 sm:px-0 text-black bg-[#f5f3ef]">
      <div>
        <Image
          src="/logo.png"
          alt="kaptanmedyalogosu"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        {['/hakkimizda', '/servisler', '/galeri', '/iletisim'].map((href) => (
          <Link
            key={href}
            href={href}
            className="transform hover:-translate-y-1 transition duration-400 px-2"
          >
            <div>
              {href === '/hakkimizda'
                ? 'HAKKIMIZDA'
                : href === '/servisler'
                ? 'SERVİSLERİMİZ'
                : href === '/galeri'
                ? 'GALERİ'
                : 'İLETİŞİM'}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-8 flex-col sm:flex-row">
        <Link
          href="tel:+9005072534711"
          className="flex items-center gap-1 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image
            src="/phone-fill.svg"
            alt="telefon iconu"
            height={34}
            width={34}
          />
          <div>0507 253 47 11</div>
        </Link>
        <Link
          href="https://www.instagram.com/kaptanmedya/"
          target="_blank"
          className="flex items-center gap-1 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image
            src="/instagram-fill.svg"
            alt="instagram iconu"
            height={25}
            width={25}
          />
          <div>@kaptanmedya</div>
        </Link>
      </div>
      <div>© 2024 Kaptan Medya Organizasyon</div>
    </section>
  );
};

export default Footer;
