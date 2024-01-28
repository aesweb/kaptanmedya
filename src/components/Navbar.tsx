import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-white text-black gap-12 z-[50] fixed top-0 w-full">
      <Link href="/hakkimizda">
        <div>hakkimizda</div>
      </Link>
      <Link href="/servisler">
        <div>servisler</div>
      </Link>
      <Link href="/">
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={100}
          width={100}
        />
      </Link>
      <Link href="/kurumsal-servisler">
        <div>kurumsal servisler</div>
      </Link>
      <Link href="/iletisim">
        <div>iletisim</div>
      </Link>
    </div>
  );
};

export default Navbar;
