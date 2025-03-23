import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PersyaratanImg from '../../../../assets/image/persyaratan.svg';
import { Card, CardBody } from '@heroui/react';

const Requirement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('persyaratan');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="persyaratan" className=" md:mb-10 pt-14">
      <div className="grid grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="col-span-12 lg:col-span-6 hidden lg:flex  md:m-10 items-center">
          <img src={PersyaratanImg} alt="Persyaratan" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="col-span-12 lg:col-span-6 mt-6">
          <h1 className="text-[40px] md:text-5xl leading-tight text-center mb-5">
            Persyaratan
          </h1>
          <Card className="border-dashed border-2 shadow-md border-blue bg-slate-50 p-4">
            <CardBody>
              <ol className="list-decimal list-inside text-base text-black font-sans">
                <li>
                  Surat Pengantar dari Universitas/Sekolah.
                  <ul className="list-disc list-inside ml-6">
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
                  <ul className="list-disc list-inside ml-6 mt-2">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Requirement;
