import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  DatePicker,
  TimeInput,
} from '@heroui/react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const SettingsOnboardingModal = (props) => {
  const { isOpen, onClose, setOnboardingDate, setOnboardingTime } = props;

  const [localOnboardingDate, setLocalOnboardingDate] = useState(null);
  const [localOnboardingTime, setLocalOnboardingTime] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setLocalOnboardingDate(null);
      setLocalOnboardingTime(null);
    }
  }, [isOpen]);

  const handleSave = () => {
    setOnboardingDate(localOnboardingDate);
    setOnboardingTime(localOnboardingTime);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="font-sans">
      <ModalContent>
        <ModalHeader>Atur Waktu Onboarding</ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <DatePicker
            label="Tanggal Onboarding"
            variant="faded"
            autoComplete="off"
            placeholder="Masukkan tanggal onboarding"
            value={localOnboardingDate}
            onChange={setLocalOnboardingDate}
          />
          <TimeInput
            variant="faded"
            granularity="minute"
            label="Waktu Mulai"
            value={localOnboardingTime}
            onChange={setLocalOnboardingTime}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="text-white"
            onPress={handleSave}
            disabled={!localOnboardingDate || !localOnboardingTime}
          >
            Simpan
          </Button>
          <Button color="danger" variant="flat" onPress={onClose}>
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

SettingsOnboardingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setOnboardingDate: PropTypes.func.isRequired,
  setOnboardingTime: PropTypes.func.isRequired,
};

export default SettingsOnboardingModal;
