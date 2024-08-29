import Image from 'next/image';
import Link from 'next/link';

const OrganizationCard = () => {
  return (
    <section className="py-12 w-11/12">
      <div className="flex flex-col rounded-lg items-center justify-center gap-12 px-12 py-12 xl:gap-32 xl:flex-row bg-[#f5f3ef]">
        <div className="gap-12 flex flex-col">
          <div>
            <div className="mb-6 text-xl">SPECIAL ORGANIZATIONS</div>
            <div className="text-2xl lg:text-3xl">
              ÖZEL DAVETLER & ORGANİZASYONLAR
            </div>
          </div>
          <div className="max-w-xl text-md">
            Kurumsal yada bireysel olarak düşündüğünüz organizasyonların
            tamamında yaratıcı, eksiksiz ve profesyonel çözümler planlıyor aynı
            zamanda etkinlik boyunca sizlere destek olarak organizasyonun
            amacına uygun olarak devam etmesini sağlıyoruz.
          </div>
          <Link href="/servisler">
            <button className="px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 w-[150px]">
              Servislerimiz
            </button>
          </Link>
        </div>
        <Image
          src="/organizationcard.webp"
          alt="İskele önünde organizasyon"
          height={500}
          width={500}
          className="rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default OrganizationCard;
