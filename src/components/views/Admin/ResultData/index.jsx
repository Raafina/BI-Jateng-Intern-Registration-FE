import TableData from '../../../UI/TableData';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdMailOutline } from 'react-icons/md';
import { useDisclosure } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';
import { COLUMN_LISTS_RESULT_DATA } from './ResultData.constant';
import { formatDate, formatTime } from '../../../../utils/formatDate';
import useResultData from './useResultData';
import SearchResultDataModal from './SearchResultDataModal';
import SettingsOnboardingModal from './SettingsOnboardingModal';

const ResultData = () => {
  const {
    ResultSAW_Data,
    totalPages,
    currentPage,
    loading,
    loadingSendMail,
    setMonth,
    setYear,
    handlePageChange,
    handleSearch,
    handleSendAcceptedEmail,
  } = useResultData();

  const [processingItemId, setProcessingItemId] = useState(null);
  const [renderKey, setRenderKey] = useState(0);

  const onboardingDateRef = useRef(null);
  const onboardingTimeRef = useRef(null);

  const searchResultDataModal = useDisclosure();
  const settingsOnboardingModal = useDisclosure();

  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1);

    if (!loadingSendMail) {
      setProcessingItemId(null);
    }
  }, [loadingSendMail]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case 'accepted_division':
        return (
          <p
            className={`inline px-2 py-1 rounded-lg ${
              {
                'Humas': 'bg-green-700 text-white',
                'Makroprudensial': 'bg-primary text-white',
                'Sistem Pembayaran': 'bg-red-700 text-white',
                'Internal': 'bg-indigo-400 text-white',
                'Pengelolaan Uang Rupiah': 'bg-slate-700 text-white',
                'Moneter': 'bg-cyan-500 text-white',
              }[cellValue] || ''
            }`}
          >
            {cellValue}
          </p>
        );
      case 'actions': {
        const isProcessingThisItem =
          loadingSendMail && processingItemId === item.id;

        return (
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={processingItemId === item.id}
              className={`${
                isProcessingThisItem
                  ? 'bg-gray-300'
                  : 'bg-primary hover:bg-opacity-80'
              } text-white p-2 rounded-xl flex items-center justify-center`}
              onClick={() => {
                const date = onboardingDateRef.current;
                const time = onboardingTimeRef.current;
                if (!date || !time) {
                  toast.error('Waktu onboarding belum diatur');
                  return;
                }
                setProcessingItemId(item.id);
                handleSendAcceptedEmail({
                  full_name: item.full_name,
                  email: item.email,
                  accepted_division: item.accepted_division,
                  onboarding_date: formatDate(date),
                  onboarding_time: formatTime(time),
                });
              }}
            >
              <MdMailOutline size={15} />
            </button>
          </div>
        );
      }

      default:
        return cellValue;
    }
  };

  return (
    <section>
      <TableData
        key={renderKey}
        showDate
        buttonTopContentLabel="Ubah Periode"
        buttonTopContentLabelSecond="Atur Waktu Onboarding"
        columns={COLUMN_LISTS_RESULT_DATA}
        data={ResultSAW_Data}
        emptyContent="Hasil seleksi tidak ditemukan"
        isLoading={loading}
        renderCell={renderCell}
        totalPages={totalPages}
        currentPage={currentPage}
        onClickButtonTopContent={searchResultDataModal.onOpen}
        onClickButtonTopContentSecond={settingsOnboardingModal.onOpen}
        onChangePage={handlePageChange}
        onChangeSearch={handleSearch}
      />

      <SearchResultDataModal
        {...searchResultDataModal}
        setMonth={setMonth}
        setYear={setYear}
      />
      <SettingsOnboardingModal
        {...settingsOnboardingModal}
        setOnboardingDate={(val) => (onboardingDateRef.current = val)}
        setOnboardingTime={(val) => (onboardingTimeRef.current = val)}
      />
    </section>
  );
};

ResultData.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default ResultData;
