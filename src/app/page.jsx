import Hero from "@/app/components/hero";
import Pricelist from "@/app/components/pricelist";
import Form from "@/app/components/form";
import Testi from "@/app/components/testi";
import Link from "next/link";
import Footer from "@/app/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-white pt-28">
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-30">
        <Link
          href="https://wa.me/6281382228051?text=Halo%20Bunda%20Shinta%2C%20saya%20ingin%20pesan%20massage"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition animate-bounce"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.893-11.893 11.893-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.653zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.15-.198.297-.767.967-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </Link>

        <Link
          href="https://www.instagram.com/shintamassagespa?utm_source=qr&igsh=c2tiN2xmMWo1enFw"
          className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.405a4.92 4.92 0 0 1 1.79 1.17 4.92 4.92 0 0 1 1.17 1.79c.165.46.35 1.26.405 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.405 2.43a4.92 4.92 0 0 1-1.17 1.79 4.92 4.92 0 0 1-1.79 1.17c-.46.165-1.26.35-2.43.405-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.405a4.92 4.92 0 0 1-1.79-1.17 4.92 4.92 0 0 1-1.17-1.79c-.165-.46-.35-1.26-.405-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.405-2.43A4.92 4.92 0 0 1 3.845 2.93a4.92 4.92 0 0 1 1.79-1.17c.46-.165 1.26-.35 2.43-.405C8.416 2.212 8.8 2.2 12 2.2zm0 2.4c-3.153 0-3.516.012-4.756.07-.97.044-1.5.21-1.852.347-.466.18-.797.395-1.15.748a2.54 2.54 0 0 0-.748 1.15c-.138.352-.303.882-.347 1.852-.058 1.24-.07 1.603-.07 4.756s.012 3.516.07 4.756c.044.97.21 1.5.347 1.852.18.466.395.797.748 1.15.353.353.684.568 1.15.748.352.138.882.303 1.852.347 1.24.058 1.603.07 4.756.07s3.516-.012 4.756-.07c.97-.044 1.5-.21 1.852-.347a2.54 2.54 0 0 0 1.15-.748 2.54 2.54 0 0 0 .748-1.15c.138-.352.303-.882.347-1.852.058-1.24.07-1.603.07-4.756s-.012-3.516-.07-4.756c-.044-.97-.21-1.5-.347-1.852a2.54 2.54 0 0 0-.748-1.15 2.54 2.54 0 0 0-1.15-.748c-.352-.138-.882-.303-1.852-.347-1.24-.058-1.603-.07-4.756-.07zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.162a3.999 3.999 0 1 0 0-7.998 3.999 3.999 0 0 0 0 7.998zm6.406-11.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
          </svg>
        </Link>

        <Link
          href="https://www.facebook.com/share/1ANBNLtAuh/"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82V14.709h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
          </svg>
        </Link>
      </div>

      {/* <Link
        href="https://wa.me/6281382228051?text=Halo%20Bunda%20Shinta%2C%20saya%20ingin%20pesan%20massage"
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg z-30 transition animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.893-11.893 11.893-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.653zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.15-.198.297-.767.967-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </Link>

      <Link
        href="https://www.instagram.com/bundashinta_massage"
        className="fixed bottom-24 right-6 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg z-30 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.405a4.92 4.92 0 0 1 1.79 1.17 4.92 4.92 0 0 1 1.17 1.79c.165.46.35 1.26.405 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.405 2.43a4.92 4.92 0 0 1-1.17 1.79 4.92 4.92 0 0 1-1.79 1.17c-.46.165-1.26.35-2.43.405-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.405a4.92 4.92 0 0 1-1.79-1.17 4.92 4.92 0 0 1-1.17-1.79c-.165-.46-.35-1.26-.405-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.405-2.43A4.92 4.92 0 0 1 3.845 2.93a4.92 4.92 0 0 1 1.79-1.17c.46-.165 1.26-.35 2.43-.405C8.416 2.212 8.8 2.2 12 2.2zm0 2.4c-3.153 0-3.516.012-4.756.07-.97.044-1.5.21-1.852.347-.466.18-.797.395-1.15.748a2.54 2.54 0 0 0-.748 1.15c-.138.352-.303.882-.347 1.852-.058 1.24-.07 1.603-.07 4.756s.012 3.516.07 4.756c.044.97.21 1.5.347 1.852.18.466.395.797.748 1.15.353.353.684.568 1.15.748.352.138.882.303 1.852.347 1.24.058 1.603.07 4.756.07s3.516-.012 4.756-.07c.97-.044 1.5-.21 1.852-.347a2.54 2.54 0 0 0 1.15-.748 2.54 2.54 0 0 0 .748-1.15c.138-.352.303-.882.347-1.852.058-1.24.07-1.603.07-4.756s-.012-3.516-.07-4.756c-.044-.97-.21-1.5-.347-1.852a2.54 2.54 0 0 0-.748-1.15 2.54 2.54 0 0 0-1.15-.748c-.352-.138-.882-.303-1.852-.347-1.24-.058-1.603-.07-4.756-.07zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.162a3.999 3.999 0 1 0 0-7.998 3.999 3.999 0 0 0 0 7.998zm6.406-11.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      </Link>

      <Link
        href="https://www.tiktok.com/@bundashinta.massage"
        className="fixed bottom-14 right-6 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg z-30 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.8 0h3.6c.1 1.2.5 2.3 1.3 3.2s2 1.5 3.3 1.7v3.6c-1.3 0-2.6-.3-3.8-.8v8.6c0 2.8-2.3 5.2-5.2 5.2s-5.2-2.3-5.2-5.2 2.3-5.2 5.2-5.2c.2 0 .4 0 .6.1v3.7c-.2-.1-.4-.1-.6-.1-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9 1.9-.8 1.9-1.9v-15.1z" />
        </svg>
      </Link> */}

      <Hero />

      <div id="tentang"></div>
      <div className="w-full p-7 md:p-17 bg-emerald-600 grid justify-center">
        <h1 className="text-center pb-10 text-2xl md:text-3xl font-bold mb-4 text-white">
          Apa itu Shinta Massage Spa?
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center md:max-w-full px-20">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              SHINTA MASSAGE SPA
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Bunda Shinta Massage Spa adalah layanan massage profesional yang
              hadir langsung ke rumah Anda. Berdiri sejak tahun 2022, kami
              berkomitmen untuk memberikan pengalaman relaxsasi terbaik tanpa
              harus keluar rumah. Kami percaya bahwa kenyamanan dan ketenangan
              bisa dinikmati di tempat yang paling personal: rumah Anda sendiri.
              Dengan terapis berpengalaman dan ramah, kami menghadirkan berbagai
              layanan pijat seperti massage tradisional, refleksi, bekam, hingga
              perawatan dengan lulur dan lain lain. <br />
              Semua dapat dinikmati dengan mudah dan aman di rumah Anda.
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0 ml-[200px]">
            <Image
              width={90}
              alt="logo"
              height={70}
              className="w-[600px] bg-black"
              src="https://res.cloudinary.com/df6nytit6/image/upload/v1745569923/WhatsApp_Image_2025-04-25_at_15.27.20_2a56ebae_j6fnpi.jpg"
            />
            {/* <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/LhRXf-yEQqA?si=5oZzc6-86gOp2D5z"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>

      <Pricelist />

      <div className="w-full bg-neutral-800 p-20 justify-center grid">
        <h1 className="text-center pb-10 text-3xl font-bold mb-4 text-white">
          Pemesanan Shinta Massage Spa
        </h1>
        <Form />
      </div>

      <Testi />
      <Footer />
    </main>
  );
}
