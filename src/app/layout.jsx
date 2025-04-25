import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bunda Shinta Massage Spa | Massage Panggilan Profesional",
  description:
    "Layanan massage panggilan profesional ke rumah Anda di Jakarta. Terapis berpengalaman, ramah, dan bersertifikat. Booking sekarang dengan Bunda Shinta Massage Spa!",
  keywords: [
    "massage panggilan Jakarta",
    "pijat di rumah Jakarta",
    "bunda shinta massage",
    "spa panggilan Jakarta",
    "pijat tradisional",
    "refleksi panggilan",
    "bekam Jakarta",
    "massage wanita ke rumah",
  ],
  authors: [{ name: "Bunda Shinta" }],
  creator: "Bunda Shinta",
  metadataBase: new URL("https://bundashinta.vercel.app"), // Ganti domain saat deploy
  openGraph: {
    title: "Bunda Shinta Massage Spa | Massage Panggilan Profesional",
    description:
      "Nikmati layanan massage dan spa panggilan langsung ke rumah Anda dengan terapis profesional. Praktis, nyaman, dan terpercaya.",
    url: "https://bundashintamassagespa.my.id",
    siteName: "Bunda Shinta Massage Spa",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/df6nytit6/image/upload/v1745417119/bundashinta/logo_shinta_massage_n8pn4c.png",
        width: 800,
        height: 600,
        alt: "Bunda Shinta Massage Spa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunda Shinta Massage Spa | Massage Panggilan Jakarta",
    description:
      "Massage profesional ke rumah Anda, praktis & nyaman. Booking sekarang juga!",
    images: [
      "https://res.cloudinary.com/df6nytit6/image/upload/v1745417119/bundashinta/logo_shinta_massage_n8pn4c.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Navbar />
            <main>{children}</main>
          </div>
          <div className="drawer-side z-40">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-neutral-800 text-white min-h-full w-80 p-4">
              <li>
                <Link href="#tentang">Tentang</Link>
              </li>
              <li>
                <Link href="#harga">Harga</Link>
              </li>
              <li>
                <Link href="#testimoni">Testimoni</Link>
              </li>
              <li className="mt-4">
                <Link
                  href="https://wa.me/6281382228051?text=Halo%20Bunda%20Shinta%2C%20saya%20ingin%20pesan%20massage"
                  target="_blank"
                  className="btn bg-white text-neutral-600 font-semibold border-0 shadow-none rounded-full"
                >
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
