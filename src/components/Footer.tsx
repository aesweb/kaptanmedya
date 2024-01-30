import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="gap-8 flex flex-col items-center justify-center py-24 bg-[#f5f3ef]">
      <div>
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <Link href="/hakkimizda">
          <div>Hakkımızda</div>
        </Link>
        <Link href="/servisler">
          <div>Servisler</div>
        </Link>
        <Link href="/galeri">
          <div>Galeri</div>
        </Link>
        <Link href="/iletisim">
          <div>İletişim</div>
        </Link>
      </div>

      <div className="flex gap-8 flex-col sm:flex-row">
        <Link href="tel:+9005072534711" className="flex items-center gap-1">
          <div>
            <Image
              src="/phone-fill.svg"
              alt="kaptanmedyalogosu"
              height={34}
              width={34}
            />
          </div>
          <div>0507 253 47 11</div>
        </Link>
        <Link
          href="https://www.instagram.com/kaptanmedya/"
          className="flex items-center gap-1"
          target="blank"
        >
          <div>
            <Image
              src="/instagram-fill.svg"
              alt="kaptanmedyalogosu"
              height={25}
              width={25}
            />
          </div>
          <div>@kaptanmedya</div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
Footer;
