import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Link } from '@heroui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import SuccessRegisterImage from '../../../../assets/image/sukses_register.svg';
const RegisterSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.fromSubmit) {
      navigate('/daftar', { replace: true });
    }
  }, [location, navigate]);

  if (!location.state?.fromSubmit) {
    return null;
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 gap-2"
      >
        <img
          src={SuccessRegisterImage}
          alt="Register Sukses!"
          className="mx-auto"
          width={400}
          height={400}
        />
        <h1 className="text-4xl text-center md:text-6xl leading-tight">
          Pendaftaran Berhasil!
        </h1>
        <p className="font-sans text-inter text-center text-base md:text-base text-grey opacity-50 mx-auto lg:w-2/4 flex justify-center">
          Terima kasih telah mendaftar Program Magang di Kantor Perwakilan Bank
          Indonesia Provinsi Jawa Tengah. Kami akan segera menghubungi Anda
          dalam beberapa minggu kedepan. Selalu cek email Anda untuk informasi
          lebih lanjut.
        </p>

        <Button
          radius="full"
          as={Link}
          href="/"
          color="primary"
          className="font-inter text-white px-8"
          type="submit"
        >
          Kembali ke Beranda
        </Button>
      </motion.div>
    </section>
  );
};

export default RegisterSuccess;
