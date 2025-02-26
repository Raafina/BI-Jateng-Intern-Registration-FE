import BILogo from '../../assets/logo/bank-indonesia-with-text.svg';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border">
      <div className="py-4 px-4">
        <div className="container mx-auto flex flex-col">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={BILogo} className="h-12" alt="BI Logo" />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-6 md:mt-5 lg:mt-0 lg:text-end">
              <div className=" font-sans text-grey opacity-80">
                <h2 className="mb-2  font-bold dark:text-white text-blue">
                  CONTACT US
                </h2>
                <ul>
                  <li>
                    <a href="https://maps.app.goo.gl/6YCtv4GhMYqq1X3u8">
                      <p>
                        {' '}
                        Kantor Perwakilan Bank Indonesia Provinsi Jawa Tengah
                      </p>
                      <p>
                        {' '}
                        Jl. Imam Bardjo SH No.4, Pleburan, Kec. Semarang Selatans
                      </p>
                      <p>Kota Semarang, Jawa Tengah 50241</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.app.goo.gl/6YCtv4GhMYqq1X3u8"></a>
                  </li>
                  <li>
                    <a href="mailto:humas.bijateng@bi.go.id">
                      humas.bijateng@bi.go.id
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025{' '}
              <a href="#" className="hover:underline">
                Kantor Perwakilan Bank Indonesia Provinsi Jawa Tengah
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
              <a
                href="https://x.com/KPwBI_Jateng"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bank_indonesia_jateng/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
