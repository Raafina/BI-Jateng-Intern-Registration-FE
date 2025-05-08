import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import useRegister from './useRegister';
import {
  Card,
  CardBody,
  Select,
  SelectItem,
  DatePicker,
  Button,
  Input,
  Spinner,
} from '@heroui/react';
import { NumberInput } from '@heroui/number-input';
import {
  COLLEGE_MAJOR,
  INTERN_CATEGORY,
  DIVISION_REQUEST,
} from './Register.constant';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    control,
    errors,
    loading,
    reset,
    success,
    handleSubmit,
    handleRegister,
  } = useRegister();

  useEffect(() => {
    if (success) {
      reset();
      navigate('/pendaftaran-sukses', {
        state: { fromSubmit: true },
      });
    }
  }, [success, reset, navigate]);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="py-6 md:py-14 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto"
      >
        <Card className="w-full border-2 shadow-lg border-slate-200 bg-slate-50 p-4 ">
          <CardBody>
            <motion.h1
              className="text-3xl md:text-4xl leading-tight text-center mb-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              Formulir Pendaftaran
            </motion.h1>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans overflow-hidden"
              onSubmit={handleSubmit(handleRegister)}
            >
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              >
                {/* Left section */}
                <Controller
                  name="full_name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Nama Lengkap"
                      variant="faded"
                      autoComplete="off"
                      isInvalid={errors.full_name !== undefined}
                      errorMessage={errors.full_name?.message}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      label="Email"
                      variant="faded"
                      autoComplete="off"
                      isInvalid={errors.email !== undefined}
                      errorMessage={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="phone"
                      label="Nomor Telepon"
                      variant="faded"
                      autoComplete="off"
                      isInvalid={errors.phone !== undefined}
                      errorMessage={errors.phone?.message}
                      onChange={(e) => {
                        const onlyDigits = e.target.value.replace(/\D/g, '');
                        field.onChange(onlyDigits);
                      }}
                    />
                  )}
                />
                <Controller
                  name="university"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Universitas"
                      variant="faded"
                      autoComplete="off"
                      isInvalid={errors.university !== undefined}
                      errorMessage={errors.university?.message}
                    />
                  )}
                />
                <Controller
                  name="college_major"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Jurusan"
                      variant="faded"
                      autoComplete="off"
                      isInvalid={errors.college_major !== undefined}
                      errorMessage={errors.college_major?.message}
                    >
                      {COLLEGE_MAJOR.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />
                <Controller
                  name="semester"
                  control={control}
                  render={({ field }) => (
                    <NumberInput
                      {...field}
                      label="Semester"
                      variant="faded"
                      autoComplete="off"
                      isInvalid={errors.semester !== undefined}
                      errorMessage={errors.semester?.message}
                    />
                  )}
                />
                <Controller
                  name="KRS_remaining"
                  control={control}
                  render={({ field }) => (
                    <NumberInput
                      {...field}
                      label="Sisa KRS"
                      variant="faded"
                      autoComplete="off"
                      isInvalid={errors.KRS_remaining !== undefined}
                      errorMessage={errors.KRS_remaining?.message}
                    />
                  )}
                />
                <motion.div
                  className="hidden md:flex mt-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                >
                  <Button
                    color="primary"
                    size="lg"
                    className="font-inter px-8 text-white w-full"
                    type="submit"
                  >
                    {loading ? <Spinner color="default" size="sm" /> : 'Daftar'}
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              >
                <div className="space-y-4">
                  <Controller
                    name="IPK"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        {...field}
                        label="IPK"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.IPK !== undefined}
                        errorMessage={errors.IPK?.message}
                      />
                    )}
                  />
                  <Controller
                    name="intern_category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Kategori Magang"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.intern_category !== undefined}
                        errorMessage={errors.intern_category?.message}
                      >
                        {INTERN_CATEGORY.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                  <Controller
                    name="division_request"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Bidang Kerja"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.division_request !== undefined}
                        errorMessage={errors.division_request?.message}
                      >
                        {DIVISION_REQUEST.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                  <Controller
                    name="start_month"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Tanggal Mulai Magang"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.start_month !== undefined}
                        errorMessage={errors.start_month?.message}
                      />
                    )}
                  />
                  <Controller
                    name="end_month"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        label="Tanggal Selesai Magang"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.end_month !== undefined}
                        errorMessage={errors.end_month?.message}
                      />
                    )}
                  />
                  <Controller
                    name="google_drive_link"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="input"
                        label="Link Pemberkasan"
                        variant="faded"
                        autoComplete="off"
                        isInvalid={errors.google_drive_link !== undefined}
                        errorMessage={errors.google_drive_link?.message}
                      />
                    )}
                  />
                </div>
                <motion.div
                  className="md:hidden flex mt-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                >
                  <Button
                    color="primary"
                    size="lg"
                    className="font-inter px-8 text-white w-full"
                    type="submit"
                  >
                    {loading ? <Spinner color="default" size="sm" /> : 'Daftar'}
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};

export default RegisterForm;
