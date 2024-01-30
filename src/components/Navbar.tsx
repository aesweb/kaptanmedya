import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="w-full bg-white text-black fixed gap-12 z-50 top-0 flex justify-center items-center">
      <Link href="/hakkimizda">
        <div>Hakkımızda</div>
      </Link>
      <Link href="/servisler">
        <div>Servisler</div>
      </Link>
      <Link href="/">
        <Image
          src="/logo.jpeg"
          alt="kaptanmedyalogosu"
          height={100}
          width={100}
        />
      </Link>
      <Link href="/galeri">
        <div>Galeri</div>
      </Link>
      <Link href="/iletisim">
        <div>İletişim</div>
      </Link>
    </div>
  );
};

export default Navbar;
