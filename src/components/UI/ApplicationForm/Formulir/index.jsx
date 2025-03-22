const Formulir = () => {
  return (
    <>
      <div className="container mx-auto px-4  py-6 md:py-14 sm:px-6 md:px-8 xl:px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl bg-white p-8 rounded-md shadow-lg border-2">
            <h1 className="text-3xl md:text-4xl leading-tight text-center mb-5">
              Formulir Pendaftaran
            </h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-base  text-grey font-sans">Nama</label>
                  <input
                    className="mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-base  text-grey font-sans">
                    Asal Kampus
                  </label>
                  <input
                    className=" mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-base  text-grey font-sans">
                    Tipe magang
                  </label>
                  <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-sans">
                    <option>Pilih Tipe Magang</option>
                    <option>Magang Mandiri</option>
                    <option>Magang KRS</option>
                  </select>
                </div>

                <div>
                  <label className="text-base  text-grey font-sans">
                    Semester
                  </label>
                  <input
                    className=" mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-base  text-grey font-sans">
                    IPK <span className="text-red-700">*</span>contoh 3.90
                  </label>
                  <input
                    className=" mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="text"
                  />
                </div>
                <div>
                  <div>
                    <label className="text-base  text-grey font-sans">
                      Program Studi
                    </label>
                    <input
                      className=" mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-gray-900 dark:text-white font-sans"
                    htmlFor="user_avatar"
                  >
                    NPWP
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-900 dark:text-white font-sans"
                    htmlFor="user_avatar"
                  >
                    KTP
                  </label>
                  <input
                    className="mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                </div>
              </div>

              {/* Berkas Section */}
              <div>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-gray-900 dark:text-white font-sans"
                      htmlFor="user_avatar"
                    >
                      Proposal Magang
                    </label>
                    <input
                      className="mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-900 dark:text-white font-sans"
                      htmlFor="user_avatar"
                    >
                      CV
                    </label>
                    <input
                      className="mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-900 dark:text-white font-sans"
                      htmlFor="user_avatar"
                    >
                      Surat Pengantar Perguruan Tinggi
                    </label>
                    <input
                      className="mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                  </div>
                  <div>
                    <label
                      className="block  text-gray-900 dark:text-white font-sans"
                      htmlFor="user_avatar"
                    >
                      Buku Tabungan
                    </label>
                    <input
                      className="mt-1 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center md:justify-end mt-6 ">
                  <button
                    type="submit"
                    className="px-12 md:px-9 py-2 text-white bg-blue hover:bg-blueHover rounded-full "
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulir;
