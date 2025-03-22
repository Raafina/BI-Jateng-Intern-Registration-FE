import PersyaratanImg from '../../../../assets/image/persyaratan.svg';
import { Card, CardBody } from '@heroui/react';
const Persyaratan = () => {
  return (
    <section id="persyaratan" className=" mb-7 md:mb-28">
      <div className="grid grid-cols-12 ">
        <div className="col-span-12 lg:col-span-6 hidden lg:flex items-start m-10">
          <img src={PersyaratanImg} alt="Persyaratan" />
        </div>
        <div className="col-span-12 lg:col-span-6 mt-6 ">
          <h1 className="text-[40px] md:text-5xl leading-tight text-center mb-5">
            Persyaratan
          </h1>
          <Card className="border-dashed border-2 shadow-none border-slate-400 bg-slate-50 p-4">
            <CardBody>
              <ol className="list-decimal list-inside text-base text-black font-sans ">
                <li className="">
                  Surat Pengantar dari Universitas/Sekolah.
                  <ul className="list-disc list-inside ml-6 ">
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
                  <ul className="list-disc list-inside ml-6 mt-2 ">
                    <li>Data diri lengkap (CV)</li>
                    <li>
                      Motivation Letter (menjelaskan maksud dan tujuan PKL,
                      harapan atau target yang akan dicapai).
                    </li>
                    <li>
                      Bidang pekerjaan yang diminati (menceritakan passion atau
                      minat terhadap salah satu bidang pekerjaan: moneter &
                      makroprudensial, sistem pembayaran, pengelolaan uang
                      rupiah, manajemen intern)
                    </li>
                    <li>
                      Informasi bidang tugas dapat dilihat di{' '}
                      <a
                        href="https://example.com"
                        className="text-blue-600 hover:underline">
                        tautan berikut ini
                      </a>
                      .
                    </li>
                    <li>Fotokopi KTP</li>
                    <li>Fotokopi NPWP</li>
                    <li>
                      Fotokopi buku rekening tabungan pribadi (khusus untuk
                      peserta PKL).
                    </li>
                  </ul>
                </li>
              </ol>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Persyaratan;
