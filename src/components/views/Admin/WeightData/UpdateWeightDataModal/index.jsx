import PropTypes from 'prop-types';
import useUpdateWeightDataModal from './useUpdateWeightDataModal';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Input,
  Spinner,
} from '@heroui/react';

const UpdateWeightDataModal = (props) => {
  const { isOpen, onClose, fetchResults, selectedId, setSelectedId } = props;
  const {
    control,
    errors,
    weight,
    success,
    loading,
    reset,
    resetSuccess,
    getWeightById,
    handleSubmit,
    handleUpdate,
  } = useUpdateWeightDataModal();

  useEffect(() => {
    if (selectedId) {
      getWeightById(selectedId);
    }
  }, [selectedId, getWeightById]);

  useEffect(() => {
    if (weight) {
      reset({
        name: weight.name || '',
        IPK_weight: weight.IPK_weight || 0,
        intern_category_weight: weight.intern_category_weight || 0,
        college_major_weight: weight.college_major_weight || 0,
        CV_score_weight: weight.CV_score_weight || 0,
        motivation_letter_score_weight:
          weight.motivation_letter_score_weight || 0,
      });
    }
  }, [weight, reset]);

  useEffect(() => {
    if (success) {
      onClose();
      setSelectedId('');
      fetchResults();
      resetSuccess();
    }
  }, [success, onClose, setSelectedId, fetchResults, resetSuccess]);

  return (
    <Modal
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
      onClose={() => onClose()}
    >
      <ModalContent className="m-4 font-sans">
        <ModalHeader className="flex flex-col gap-1">
          Ubah Data Bobot
        </ModalHeader>
        <ModalBody>
          {errors?.totalWeight && (
            <p className="text-red-500 text-sm bg-red-100 px-2 py-3 rounded-lg">
              {errors.totalWeight.message}
            </p>
          )}
          <form onSubmit={handleSubmit(handleUpdate)} id="update-weight">
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
          <Button color="primary" type="submit" form="update-weight">
            {loading ? <Spinner /> : 'Simpan'}
          </Button>
          <Button color="danger" variant="flat" onPress={onClose}>
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

UpdateWeightDataModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UpdateWeightDataModal;
