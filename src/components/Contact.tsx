import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-24 w-11/12">
      <div className="flex flex-col items-center justify-center text-center px-12 bg-[#f5f3ef] rounded-lg text-black">
        <div className="text-3xl font-semibold py-12">Bize Ulasin</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Link
            href="tel:+9005072534711"
            className="items-center justify-center flex flex-col"
          >
            <Image
              src="/phone-fill.svg"
              alt="kaptanmedyalogosu"
              height={20}
              width={20}
            />
            <div className="text-xl pt-2">0523 243 34 52</div>
          </Link>
          <Link
            href="https://www.instagram.com/kaptanmedya/"
            target="blank"
            className="items-center justify-center flex flex-col"
          >
            <Image
              src="/instagram-fill.svg"
              alt="kaptanmedyalogosu"
              height={20}
              width={20}
            />
            <div className="text-xl pt-2">instagram</div>
          </Link>
          <Link
            href="https://www.instagram.com/kaptanmedya/"
            target="blank"
            className="items-center justify-center flex flex-col"
          >
            <Image
              src="/map.svg"
              alt="kaptanmedyalogosu"
              height={20}
              width={20}
            />
            <div className="text-xl pt-2">konum</div>
          </Link>
        </div>
        <button className="px-6 my-10 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-[150px]">
          Bize Ulasin
        </button>
      </div>
    </section>
  );
};

export default Contact;
