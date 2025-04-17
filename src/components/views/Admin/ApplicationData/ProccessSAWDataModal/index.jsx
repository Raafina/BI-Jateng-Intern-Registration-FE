import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Input,
  Select,
  SelectItem,
} from '@heroui/react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import useWeightData from '../../WeightData/useWeightData';
import useProccessSAWDataModal from './useProccessSAWDataModal';

const ProccessSAWDataModal = (props) => {
  const { isOpen, onClose } = props;

  const { fetchResults } = useWeightData();

  const {
    control,
    errors,
    WeightsData,
    // loading,
    // success,
    // handleSubmit,
    // handleCalculateSAW,
  } = useProccessSAWDataModal();

  const handleSearch = () => {
    // setMonth(localMonth);
    // setYear(localYear);
    onClose();
  };

  useEffect(() => {
    fetchResults(1);
  }, [fetchResults]);

  if (WeightsData.length === 0) {
    return <div>Data bobot belum diisi</div>;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="font-sans">
      <ModalContent>
        <ModalHeader>Jalankan Proses Seleksi</ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <Controller
            name="start_month"
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
            name="weight_id"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Bobot"
                variant="faded"
                autoComplete="off"
                isInvalid={errors.weight_id !== undefined}
                errorMessage={errors.weight_id?.message}
              >
                {WeightsData.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="text-white" onPress={handleSearch}>
            Cari
          </Button>
          <Button color="danger" variant="flat" onPress={onClose}>
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ProccessSAWDataModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
};

export default ProccessSAWDataModal;
