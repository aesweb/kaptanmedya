import React from 'react';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-white text-black gap-12">
      <div>hakkimizda</div>
      <div>servisler</div>

      <Image
        src="/logo.jpeg"
        alt="kaptanmedyalogosu"
        height={100}
        width={100}
      />

      <div>kurumsal servisler</div>
      <div>iletisim</div>
    </div>
  );
};

export default Navbar;
