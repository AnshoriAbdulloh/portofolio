export default function CuriculumVitae() {
  const nomorWA = "6285236706584"; // Ganti dengan nomor WhatsApp Anda

  const handleSubmit = (e) => {
    e.preventDefault();

    const nama = e.target.nama.value;
    const email = e.target.email.value;
    const pesan = e.target.pesan.value;

    const text = `Halo, saya ${nama}%0AEmail: ${email}%0A%0APesan:%0A${pesan}`;

    window.open(`https://wa.me/${nomorWA}?text=${text}`, "_blank");
  };

  return (
    <div className='w-full flex justify-center items-center py-20 bg-gray-100'>
      <div className='w-[90%] max-w-6xl bg-[#6F92CC] rounded-[30px] p-10'>
        <h1 className='text-4xl font-bold mb-8 text-white'>Kirim Pesan</h1>

        <form onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-5'>
          <input
            type='text'
            name='nama'
            placeholder='Nama'
            required
            className='p-4 rounded-xl outline-none'
          />

          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            className='p-4 rounded-xl outline-none'
          />

          <textarea
            name='pesan'
            placeholder='Tulis pesan Anda...'
            required
            rows={6}
            className='md:col-span-2 p-4 rounded-xl outline-none resize-none'
          />

          <button
            type='submit'
            className='md:col-span-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition'
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
