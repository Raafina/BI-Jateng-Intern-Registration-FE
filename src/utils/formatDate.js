const formatDate = (dateObj) => {
  if (!dateObj) return '';
  const { year, month, day } = dateObj;
  const mm = String(month).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
};

const formatTime = (timeObj) => {
  if (!timeObj) return '';
  const { hour, minute } = timeObj;
  const hh = String(hour).padStart(2, '0');
  const mm = String(minute).padStart(2, '0');
  return `${hh}.${mm} - `;
};

export { formatDate, formatTime };
