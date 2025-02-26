import PersyaratanImg from './../../assets/image/persyaratan.svg';

const Persyaratan = () => {
  return (
    <section
      id="requirements"
      className="container mx-auto px-4 pb-9 sm:px-6 md:px-8 py-14 xl:px-4"
    >
      <div className="grid grid-cols-12 ">
        <div className="col-span-12 lg:col-span-6 items-center hidden lg:flex">
          <img src={PersyaratanImg} alt="Persyaratan" />
        </div>
        <div className="col-span-12 lg:col-span-6 mt-6">
          <h1 className="text-[40px] md:text-5xl  leading-tight  text-center lg:text-left mb-5">
            Persyaratan
          </h1>
          <ol className="list-decimal list-inside text-base md:text-[18px] text-grey font-sans leading-7">
            <li className="">
              Surat Pengantar dari Universitas/Sekolah.
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>
                  Keterangan data mahasiswa/siswa (Nama, NIM/NIS,
                  Fakultas/Program Studi/Jurusan, Semester/Kelas)
                </li>
                <li>Durasi dan Periode PKL</li>
                <li>Fotokopi transkrip nilai semester terakhir</li>
              </ul>
            </li>
            <li>
              Proposal Individu
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Data diri lengkap (CV)</li>
                <li>
                  Motivation Letter (menjelaskan maksud dan tujuan PKL, harapan
                  atau target yang akan dicapai).
                </li>
                <li>
                  Bidang pekerjaan yang diminati (menceritakan passion atau
                  minat terhadap salah satu bidang pekerjaan: moneter &
                  makroprudensial, sistem pembayaran, pengelolaan uang rupiah,
                  manajemen intern)
                </li>
                <li>
                  Informasi bidang tugas dapat dilihat di{' '}
                  <a
                    href="https://example.com"
                    className="text-blue-600 hover:underline"
                  >
                    tautan berikut ini
                  </a>
                  .
                </li>
                <li>Fotokopi KTP</li>
                <li>Fotokopi NPWP</li>
                <li>
                  Fotokopi buku rekening tabungan pribadi (khusus untuk peserta
                  PKL).
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Persyaratan;
