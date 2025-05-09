import PropTypes from 'prop-types';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  //   Spinner,
} from '@heroui/react';
import { Controller } from 'react-hook-form';
import useAddWeightDataModal from './useAddWeightDataModal';
import { useEffect } from 'react';

const AddWeightDataModal = (props) => {
  const { isOpen, onClose, onOpenChange, fetchResults } = props;

  const {
    control,
    errors,
    success,
    loading,
    reset,
    resetSucces,
    handleSubmit,
    handleAddWeight,
    handleCloseModal,
  } = useAddWeightDataModal();

  useEffect(() => {
    if (success) {
      fetchResults();
      reset();
      onClose();
      resetSucces();
    }
  }, [success, onClose, fetchResults, loading, resetSucces, reset]);

  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
      onClose={() => onClose()}
    >
      <ModalContent className="m-4 font-sans">
        <ModalHeader>Tambah Data Bobot</ModalHeader>
        <ModalBody>
          {errors?.totalWeight && (
            <p className="text-red-500 text-sm bg-red-100 px-2 py-3 rounded-lg">
              {errors.totalWeight.message}
            </p>
          )}

          <form onSubmit={handleSubmit(handleAddWeight)} id="add-weight">
            <div className="space-y-4">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nama Bobot"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.name !== undefined}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
              <Controller
                name="IPK_weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Bobot IPK"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.IPK_weight !== undefined}
                    errorMessage={errors.IPK_weight?.message}
                  />
                )}
              />
              <Controller
                name="intern_category_weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Bobot Kategori Magang"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.intern_category_weight !== undefined}
                    errorMessage={errors.intern_category_weight?.message}
                  />
                )}
              />
              <Controller
                name="college_major_weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Bobot Jurusan"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.college_major_weight !== undefined}
                    errorMessage={errors.college_major_weight?.message}
                  />
                )}
              />
              <Controller
                name="KRS_remaining_weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Bobot Sisa SKS"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.KRS_remaining_weight !== undefined}
                    errorMessage={errors.KRS_remaining_weight?.message}
                  />
                )}
              />
              <Controller
                name="CV_score_weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Bobot Skor CV"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.CV_score_weight !== undefined}
                    errorMessage={errors.CV_score_weight?.message}
                  />
                )}
              />
              <Controller
                name="motivation_letter_score_weight"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Bobot Skor Motivation Letter"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={
                      errors.motivation_letter_score_weight !== undefined
                    }
                    errorMessage={
                      errors.motivation_letter_score_weight?.message
                    }
                  />
                )}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" form="add-weight">
            {loading ? 'Menambahkan...' : 'Tambah'}
          </Button>
          <Button
            color="danger"
            variant="flat"
            onPress={() => handleCloseModal(onClose)}
          >
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

AddWeightDataModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  fetchResults: PropTypes.func,
  onOpenChange: PropTypes.func,
};

export default AddWeightDataModal;
