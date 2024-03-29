'use client';
import { useRouter } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa6';

const Whatsapp = () => {
  const router = useRouter();

  const handleClick = async () => {
    window.open(`https://wa.me/+905072534711`);
  };

  return (
    <>
      <div
        className="bg-green-600 w-min p-2 rounded-full fixed 
              bottom-10 right-4 cursor-pointer md:right-8"
        onClick={handleClick}
      >
        <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
      </div>
    </>
  );
};

export default Whatsapp;
