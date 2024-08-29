'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fade = useSpring({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? '25rem' : '0rem',
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: '/hakkimizda', label: 'HAKKIMIZDA' },
    { href: '/servisler', label: 'SERVİSLERİMİZ' },
    { href: '/', label: 'Ana Sayfa', logo: true },
    { href: '/galeri', label: 'GALERİ' },
    { href: '/iletisim', label: 'İLETİŞİM' },
  ];

  return (
    <div className="w-full bg-[#f5f3ef] text-black fixed z-50 top-0 md:py-2 border border-b-gray-500">
      <div className="items-center gap-12 hidden md:flex justify-center">
        {navItems.map((item) => (
          <Link key={item.href} href={item?.href}>
            {item.logo ? (
              <Image
                src="/logo.png"
                alt="kaptanmedyalogosu"
                height={100}
                width={100}
                className="bg-transparent transform hover:-translate-y-1 transition duration-400"
              />
            ) : (
              <button className="px-6 py-2 rounded-lg font-medium transform hover:-translate-y-1 transition duration-400">
                {item?.label}
              </button>
            )}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-around md:hidden transition-all duration-300">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="kaptanmedya logosu"
            height={100}
            width={100}
          />
        </Link>
        <div className="md:hidden" onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
      </div>
      {isOpen && (
        <animated.div
          style={fade}
          className="md:hidden flex flex-col gap-12 justify-center items-center"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item?.href}>
              <div
                className="hover:translate-x-2 transition duration-200"
                onClick={closeMenu}
              >
                {item?.label}
              </div>
            </Link>
          ))}
        </animated.div>
      )}
    </div>
  );
};

export default Navbar;
