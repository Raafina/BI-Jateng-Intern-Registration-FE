import BILogo from '../../../assets/logo/bank-indonesia-with-text.svg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button, Card, CardBody, Input, Spinner } from '@heroui/react';
import { Controller } from 'react-hook-form';
import useLogin from './useLogin';
import { motion } from 'framer-motion';
const Login = () => {
  const {
    handleSubmit,
    handleLogin,
    toggleVisibility,
    isVisible,
    loading,
    control,
    errors,
  } = useLogin();

  return (
    <section className="bg-gray-50 font-sans">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <motion.div
          initial={{ opacity: 0, ys: -50 }}
          whileInView={{ opacity: 1, ys: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardBody className="p-8">
              <div className="flex justify-center">
                <a
                  href="/"
                  className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                  <img className="w-64 h-w-64 mr-2" src={BILogo} alt="logo" />
                </a>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
              <form
                className="flex w-80 flex-col gap-4"
                onSubmit={handleSubmit(handleLogin)}
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Email"
                      variant="bordered"
                      autoComplete="off"
                      isInvalid={errors.email !== undefined}
                      errorMessage={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type={isVisible ? 'text' : 'password'}
                      label="Password"
                      variant="bordered"
                      autoComplete="off"
                      isInvalid={errors.password !== undefined}
                      errorMessage={errors.password?.message}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <FaEye className="pointer-events-none text-xl text-default-400" />
                          ) : (
                            <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                          )}
                        </button>
                      }
                    />
                  )}
                />
                <Button color="primary" size="lg" type="submit">
                  {loading ? <Spinner /> : 'Login'}
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
