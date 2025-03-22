const FAQAccor = () => {
  return (
    <>
      <section
        id="FAQ"
        className="container mx-auto px-4 pt-4 pb-11 sm:px-6 md:px-8 lg:py-32 xl:px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5 ">
            <h1 className="text-[40px] md:text-5xl  leading-tight  text-center lg:text-left mb-5">
              Frequently Asked Question
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div
              id="accordion-collapse"
              className="px-6 md:px-0"
              data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-1">
                  <p className="text-base md:text-[18px] font-sans font-normal text-grey ">
                    Apa saja fasilitas yang didapatkan?
                  </p>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-1">
                <div className="px-10 py-4 border font-sans leading-8 text-base md:text-[18px] border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <ol className="list-decimal">
                    <li>
                      Memperoleh bimbingan dalam pelaksanaan praktek kerja.
                    </li>
                    <li>
                      Memperoleh uang bantuan transportasi/komunikasi perhari
                      sesuai realisasi PKL, yang besarannya sesuai dengan
                      standar anggaran Bank Indonesia.
                    </li>
                    <li>
                      Memperoleh surat keterangan pelaksanaan PKL setelah
                      peserta PKL menyelesaikan seluruh kewajiban.
                    </li>
                    <li>Sertifikat Magang</li>
                  </ol>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2">
                  <p className="text-base md:text-[18px] font-sans font-normal text-grey ">
                    Berapa lama durasi Magang?
                  </p>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2">
                <div className="px-5 py-4 border font-sans leading-8 text-base md:text-[18px] border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p>
                    Pelaksanaan magang dilakukan selama 1 bulan atau 25 hari
                    kerja.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3">
                  <p className="text-base md:text-[18px] font-sans font-normal text-grey ">
                    Setelah daftar, apa yang harus dilakukan?
                  </p>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-3">
                <div className="px-5 py-4 border font-sans leading-8 text-base md:text-[18px] border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p>
                    Tunggu pengumuman yang akan kami kirimkan ke e-mail yang
                    telah didaftarkan. Estimasi waktu yang dibutuhkan antara 1-2
                    bulan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQAccor;
