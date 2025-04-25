
const reviews = [
  {
    nama: "Dewi A.",
    komentar:
      "Pelayanannya sangat memuaskan, terapis datang tepat waktu dan sangat profesional!",
  },
  {
    nama: "Rina M.",
    komentar:
      "Massage-nya enak banget, langsung rileks dan bisa tidur nyenyak malamnya!",
  },
  {
    nama: "Novi L.",
    komentar:
      "Suka banget sama perawatan refleksi dan lulurnya, recommended banget!",
  },
  {
    nama: "Intan S.",
    komentar:
      "Terapisnya ramah, sopan, dan hasil pijatannya bikin badan enteng lagi.",
  },
];

const Testi = () => {
  return (
    <div id="testimoni" className="w-full px-6 py-16 bg-gray-200 text-gray-900 text-center">
      <h1 className="text-3xl font-bold mb-10">Apa Kata Mereka?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{review.nama}</h2>
            <div className="flex items-center mb-3 text-yellow-500">
              {"⭐️⭐️⭐️⭐️⭐️"}
            </div>
            <p className="text-sm text-gray-700">{review.komentar}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testi;
