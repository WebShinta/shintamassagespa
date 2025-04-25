"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    kecamatan: "",
    kamar: "",
    terapis: "",
    perawatan: "",
    durasi: "",
    waktu: "",
    harga: "",
    catatan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pesan = `
 *Order Shinta Massage via WhatsApp* :
 
👤 Nama: ${formData.nama}
🏠 Alamat: ${formData.alamat}
🏠 Kecamatan: ${formData.kecamatan}

🚪 No. Kamar: ${formData.kamar}
🧑‍⚕️ Terapis: ${formData.terapis}
💆‍♀️ Layanan: ${formData.perawatan}
⏳ Durasi: ${formData.durasi}
🕒 Waktu: ${formData.waktu}
💸 Harga: ${formData.harga}
📝 Catatan: ${formData.catatan}
    `;

    const nomorTujuan = "6281382228051";
    const encodedPesan = encodeURIComponent(pesan);
    const url = `https://wa.me/${nomorTujuan}?text=${encodedPesan}`;

    window.open(url, "_blank");
  };

  return (
    <form id="pemesanan" onSubmit={handleSubmit} className="md:grid md:grid-cols-2 md:mx-5 gap-4">
      {[
        ["nama", "Nama Lengkap"],
        ["alamat", "Alamat Lengkap"],
        ["kecamatan", "Kecamatan Lengkap"],
        ["kamar", "Nomor Kamar"],
        ["terapis", "Terapis Laki-laki/Perempuan"],
        ["perawatan", "Layanan"],
        ["durasi", "Durasi"],
        ["waktu", "Waktu"],
        ["harga", "Harga"],
        ["catatan", "Catatan"],
      ].map(([name, label]) => (
        <fieldset key={name} className="fieldset">
          <legend className="fieldset-legend text-white">{label}</legend>
          <input
            type="text"
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className="input w-80"
            placeholder="Type here"
          />
        </fieldset>
      ))}

      <button
        type="submit"
        className="btn bg-emerald-600 text-white border-0 shadow-none mt-4 w-36 col-span-2 justify-self-start"
      >
        Kirim
      </button>
    </form>
  );
};

export default Form;
