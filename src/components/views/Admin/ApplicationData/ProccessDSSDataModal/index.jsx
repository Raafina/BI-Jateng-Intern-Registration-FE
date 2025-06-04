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
import { useEffect } from 'react';
import { NumberInput } from '@heroui/number-input';
import { Controller } from 'react-hook-form';
import useWeightData from '../../WeightData/useWeightData';
import PropTypes from 'prop-types';
import useProccessDSSDataModal from './useProccessDSSDataModal';

const ProccessDSSDataModal = (props) => {
  const { isOpen, onClose } = props;

  const { fetchResults } = useWeightData();

  const {
    control,
    errors,
    WeightsData,
    // reset,
    // loading,
    // success,
    handleSubmit,
    handleCalculateDSS,
  } = useProccessDSSDataModal();

  useEffect(() => {
    fetchResults(1);
  }, [fetchResults]);

  if (WeightsData.length === 0) {
    return <div>Data bobot belum diisi</div>;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="font-sans" size="3xl">
      <ModalContent>
        <ModalHeader>Jalankan Proses Seleksi</ModalHeader>
        <ModalBody className="flex flex-col gap-4 w-full">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans overflow-hidden ">
            <div className="space-y-4">
              <p className="font-medium">Keterangan Proses</p>
              <Controller
                name="month"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Bulan"
                    placeholder="Masukkan bulan (01-12)"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.month !== undefined}
                    errorMessage={errors.month?.message}
                  />
                )}
              />
              <Controller
                name="year"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Tahun"
                    placeholder="Masukkan tahun"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.year !== undefined}
                    errorMessage={errors.year?.message}
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
            </div>
            <div className="space-y-4">
              <p className="font-medium">Keperluan Bidang Kerja</p>
              <Controller
                name="Moneter"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="Moneter"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.Moneter !== undefined}
                    errorMessage={errors.Moneter?.message}
                  />
                )}
              />
              <Controller
                name="IT"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="IT"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.IT !== undefined}
                    errorMessage={errors.IT?.message}
                  />
                )}
              />
              <Controller
                name="Sistem_Pembayaran"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="Sistem Pembayaran"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.IT !== undefined}
                    errorMessage={errors.IT?.message}
                  />
                )}
              />
              <Controller
                name="Pengelolaan_Uang_Rupiah"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="Pengelolaan Uang Rupiah"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.IT !== undefined}
                    errorMessage={errors.IT?.message}
                  />
                )}
              />
              <Controller
                name="Humas"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="Humas"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.IT !== undefined}
                    errorMessage={errors.IT?.message}
                  />
                )}
              />
              <Controller
                name="Internal"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="Internal"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.IT !== undefined}
                    errorMessage={errors.IT?.message}
                  />
                )}
              />
              <Controller
                name="Makroprudensial"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    label="Makroprudensial"
                    variant="faded"
                    autoComplete="off"
                    isInvalid={errors.IT !== undefined}
                    errorMessage={errors.IT?.message}
                  />
                )}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="text-white"
            onPress={handleSubmit(handleCalculateDSS)}
          >
            Eksekusi
          </Button>
          <Button color="danger" variant="flat" onPress={onClose}>
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

ProccessDSSDataModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
};

export default ProccessDSSDataModal;
