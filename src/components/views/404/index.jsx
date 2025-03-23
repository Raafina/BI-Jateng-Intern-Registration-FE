import NotFoundImage from '../../../assets/image/not-found.svg';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={NotFoundImage} alt="Not Found" width={400} height={400} />
      <h1 className="text-2xl text-center md:text-4xl leading-tight">
        Halaman tidak ditemukan
      </h1>
      <p className="font-sans text-inter text-center text-base md:text-base text-grey opacity-50 mt-2 mx-auto w-3/4 flex justify-center">
        Maaf, halaman yang Anda cari tidak tersedia.
      </p>
    </div>
  );
};

export default NotFound;
