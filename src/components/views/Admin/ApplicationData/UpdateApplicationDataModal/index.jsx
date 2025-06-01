import PropTypes from 'prop-types';
import useUpdateApplicationDataModal from './useUpdateApplicationDataModal';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { parseDate } from '@internationalized/date';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Button,
  Input,
  Spinner,
} from '@heroui/react';

const extractDate = (datetimeStr) => datetimeStr?.split('T')[0]?.split(' ')[0];

const formatDateForDisplay = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const UpdateApplicationDataModal = (props) => {
  const { isOpen, onClose, fetchResults, selectedId, setSelectedId } = props;
  const {
    control,
    errors,
    application,
    success,
    loading,
    reset,
    resetSuccess,
    getApplicationById,
    handleSubmit,
    handleUpdate,
  } = useUpdateApplicationDataModal();

  useEffect(() => {
    if (selectedId) {
      getApplicationById(selectedId);
    }
  }, [selectedId, getApplicationById]);

  useEffect(() => {
    if (application) {
      reset({
        full_name: application.full_name || '',
        email: application.email || '',
        phone: application.phone || '',
        university: application.university || '',
        intern_category: application.intern_category || '',
        semester: application.semester || '',
        KRS_remaining: application.KRS_remaining || '',
        division_request: application.division_request || '',
        IPK: application.IPK || '',
        college_major: application.college_major || '',
        google_drive_link: application.google_drive_link || '',
        start_month: parseDate(extractDate(application.start_month)) || '',
        end_month: parseDate(extractDate(application.end_month)) || '',
        CV_score: application.CV_score || '',
        motivation_letter_score: application.motivation_letter_score || '',
      });
    }
  }, [application, reset]);

  useEffect(() => {
    if (success) {
      onClose();
      setSelectedId('');
      fetchResults();
      resetSuccess();
    }
  }, [success, onClose, setSelectedId, fetchResults, resetSuccess]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      size="md"
      className="font-sans"
      backdrop="opaque"
      isDismissable={true}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1">
              Ubah Data Pendaftar
            </DrawerHeader>
            <DrawerBody>
              <form
                id="update-application"
                className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans"
                onSubmit={handleSubmit(handleUpdate)}
              >
                <div className="space-y-4">
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
                        disabled
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
                        disabled
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
                        label="Phone"
                        variant="faded"
                        autoComplete="off"
                        disabled
                        isInvalid={errors.phone !== undefined}
                        errorMessage={errors.phone?.message}
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
                        disabled
                        isInvalid={errors.university !== undefined}
                        errorMessage={errors.university?.message}
                      />
                    )}
                  />
                  <Controller
                    name="college_major"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Jurusan"
                        variant="faded"
                        autoComplete="off"
                        disabled
                        isInvalid={errors.college_major !== undefined}
                        errorMessage={errors.college_major?.message}
                      />
                    )}
                  />
                  <Controller
                    name="semester"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        label="Semester"
                        variant="faded"
                        autoComplete="off"
                        disabled
                        isInvalid={errors.semester !== undefined}
                        errorMessage={errors.semester?.message}
                      />
                    )}
                  />
                  <Controller
                    name="KRS_remaining"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        label="Sisa KRS"
                        variant="faded"
                        autoComplete="off"
                        disabled
                        isInvalid={errors.KRS_remaining !== undefined}
                        errorMessage={errors.KRS_remaining?.message}
                      />
                    )}
                  />
                  <Controller
                    name="IPK"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        label="IPK"
                        variant="faded"
                        autoComplete="off"
                        disabled
                        isInvalid={errors.IPK !== undefined}
                        errorMessage={errors.IPK?.message}
                      />
                    )}
                  />
                </div>
                {/* Right Section */}
                <div>
                  <div className="space-y-4">
                    <Controller
                      name="intern_category"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          label="Kategori Magang"
                          variant="faded"
                          autoComplete="off"
                          disabled
                          isInvalid={errors.intern_category !== undefined}
                          errorMessage={errors.intern_category?.message}
                        />
                      )}
                    />
                    <Controller
                      name="division_request"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          label="Bidang Kerja"
                          variant="faded"
                          autoComplete="off"
                          disabled
                          isInvalid={errors.division_request !== undefined}
                          errorMessage={errors.division_request?.message}
                        />
                      )}
                    />
                    <Controller
                      name="start_month"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          value={formatDateForDisplay(field.value)}
                          label="Tanggal Mulai Magang"
                          variant="faded"
                          autoComplete="off"
                          disabled
                          isInvalid={errors.start_month !== undefined}
                          errorMessage={errors.start_month?.message}
                        />
                      )}
                    />

                    <Controller
                      name="end_month"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          value={formatDateForDisplay(field.value)}
                          label="Tanggal Selesai Magang"
                          variant="faded"
                          autoComplete="off"
                          disabled
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
                          disabled
                          isInvalid={errors.google_drive_link !== undefined}
                          errorMessage={errors.google_drive_link?.message}
                        />
                      )}
                    />
                    <Controller
                      name="CV_score"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="input"
                          label="Skor CV"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={errors.CV_score !== undefined}
                          errorMessage={errors.CV_score?.message}
                        />
                      )}
                    />
                    <Controller
                      name="motivation_letter_score"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="input"
                          label="Skor Motivattion Letter"
                          variant="faded"
                          autoComplete="off"
                          isInvalid={
                            errors.motivation_letter_score !== undefined
                          }
                          errorMessage={errors.motivation_letter_score?.message}
                        />
                      )}
                    />
                  </div>
                </div>
              </form>
            </DrawerBody>
            <DrawerFooter>
              <Button color="primary" type="submit" form="update-application">
                {loading ? <Spinner /> : 'Simpan'}
              </Button>
              <Button color="danger" variant="flat" onPress={onClose}>
                Batal
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

UpdateApplicationDataModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UpdateApplicationDataModal;
