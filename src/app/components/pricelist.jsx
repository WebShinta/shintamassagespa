import Image from "next/image";

const Pricelist = () => {
  return (
    <main id="harga" className="w-full px-6 md:px-24 py-12 bg-white text-gray-700">
      <h1 className="text-center pb-10 text-2xl md:text-3xl font-bold mb-8 text-gray-700">
        Harga yang Terjangkau
      </h1>

      {/* Section Wrapper */}
      <div className="space-y-20">

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            width={400}
            height={500}
            alt="Massage Tradisional"
            unoptimized
            className="w-full md:w-[350px] h-auto rounded-2xl"
            src="https://res.cloudinary.com/df6nytit6/image/upload/v1745544326/bundashinta/young-woman-having-face-massage-relaxing-spa-salon-min_gbiomp.jpg"
          />
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Massage Tradisional
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Massage Tradisional (120 mins) Rp.350
              <br />
              Massage Tradisional (90 mins) Rp.250
              <br />
              Thai Massage (120 mins) Rp.450
              <br />
              Thai Massage (90 mins) Rp.400
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Sport Massage
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Sport Massage (120 mins) Rp.400
              <br />
              Sport Massage (90 mins) Rp.300
            </p>
            <h2 className="text-xl md:text-2xl font-bold my-3 mt-3">
              All Treatment
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
            All Treatment (120 mins) Rp.450
              <br />
              All Treatment (90 mins) Rp.350
            </p>
          </div>
          <Image
            width={400}
            height={500}
            alt="Sport Massage"
            unoptimized
            className="w-full md:w-[350px] h-auto rounded-2xl"
            src="https://res.cloudinary.com/df6nytit6/image/upload/v1745544326/bundashinta/young-beautiful-woman-relaxing-massage-spa-salon-min_f6wdjo.jpg"
          />
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            width={400}
            height={500}
            alt="Massage Refleksi"
            unoptimized
            className="w-full md:w-[350px] h-auto rounded-2xl"
            src="https://res.cloudinary.com/df6nytit6/image/upload/v1745544323/bundashinta/woman-relaxing-spa-min_igwq64.jpg"
          />
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Massage Refleksi
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Massage Refleksi (120 mins) Rp.350
              <br />
              Massage Refleksi (90 mins) Rp.250
              <br />
              Tradisional & FaceAcupressue (90 mins) Rp.250
              <br />
              Tradisional & FaceAcupressue (120 mins) Rp.350
              <br />
              Massage Kerik (120 mins) Rp.350
              <br />
              Massage Kerik (90 mins) Rp.250
              <br />
              Massage + Lulur (90 mins) Rp.250
              <br />
              Massage + Lulur (120 mins) Rp.350
              <br />
              Massage Bekam (120 mins) Rp.300
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Pricelist;
