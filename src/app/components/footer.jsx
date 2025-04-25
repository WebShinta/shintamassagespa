import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center py-16 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 bg-neutral-800 rounded-xl px-6 md:px-16 py-10 w-full max-w-4xl">
          <p className="text-white text-center md:text-left text-lg md:text-xl font-bold">
            Rilekskan badanmu, karena kamu pantas untuk dimanjakan.
          </p>
          <Link
            href="https://wa.me/6285780294072?text=Halo%20Bunda%20Shinta%2C%20saya%20ingin%20pesan%20massage"
            className="btn bg-emerald-600 text-white font-bold border-0 shadow-none px-6 py-3 rounded-full text-sm md:text-base"
          >
            Ayo Sekarang!
          </Link>
        </div>
      </div>

      <footer className="footer sm:footer-horizontal footer-center bg-emerald-600 text-base-content p-10">
        <aside>
          <p className="text-white font-semibold">
            Copyright © {new Date().getFullYear()} - Shinta Massage Spa -
            Jakarta Indonesia
          </p>
        </aside>
      </footer>
    </>
  );
};
export default Footer;
