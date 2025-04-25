const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/df6nytit6/image/upload/v1745543687/bundashinta/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort-min_yt2jdx.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Shinta Massage Spa</h1>
          <p className="mb-5">
            Relaxsasi Tanpa Batas, Kenyamanan yang Menghampiri Kamu.
            <br />
            Layanan massage panggilan profesional langsung ke rumah kamu.
          </p>
          <button className="btn bg-emerald-600 border-0 text-white shadow-none rounded-full">
            Pelajari selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
