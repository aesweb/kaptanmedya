import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-24 w-11/12">
      <div className="flex flex-col items-center justify-center text-center px-12 bg-[#f5f3ef] rounded-lg text-black">
        <div className="text-3xl font-semibold py-12">Bize Ulaşın</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <Link
            href="tel:+9005072534711"
            className="items-center justify-center flex flex-col hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image
              src="/phone-fill.svg"
              alt="telefon iconu"
              height={20}
              width={20}
            />
            <div className="text-xl pt-2">0507 253 47 11</div>
          </Link>
          <Link
            href="https://www.instagram.com/kaptanmedya/"
            target="blank"
            className="items-center justify-center flex flex-col hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image
              src="/instagram-fill.svg"
              alt="instagram iconu"
              height={20}
              width={20}
            />
            <div className="text-xl pt-2">Instagram</div>
          </Link>
          <Link
            href="https://www.google.com.tr/maps/place/Ba%C4%9Flarba%C5%9F%C4%B1,+%C4%B0stasyon+Cd.+No:136,+41700+Dar%C4%B1ca%2FKocaeli/@40.7582394,29.3840402,17z/data=!3m1!4b1!4m6!3m5!1s0x14cae06efa4919fb:0x26ea8abe2f08d819!8m2!3d40.7582394!4d29.3866151!16s%2Fg%2F11fl9grh0k?entry=ttu"
            target="blank"
            className="items-center justify-center flex flex-col hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image src="/map.svg" alt="konum iconu" height={20} width={20} />
            <div className="text-xl pt-2">Konum</div>
          </Link>
        </div>
        <Link href="/iletisim">
          <button className="px-6 my-10 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-[150px]">
            Bize Ulaşın
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
