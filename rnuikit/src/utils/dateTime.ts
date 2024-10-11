import { format, formatDistance, parseISO } from 'date-fns';

const formatDate = (date: Date, formatStr = 'dd-LLL-yyyy'): string => {
  return format(date, formatStr);
};

const formatDateTime = (date: Date, formatStr = 'dd-LLL-yyy HH:mm'): string => {
  return format(date, formatStr);
};

const formatDateDistance = (date: Date): string => {
  return formatDistance(date, new Date(), {
    addSuffix: true,
    includeSeconds: false,
  });
};

const formatDateTimeISO = (date: Date): string => {
  const parsedTime = parseISO(new Date(date) as unknown as string);
  return parsedTime as unknown as string;
};

export const dateTimeUtils = {
  formatDate,
  formatDateTime,
  formatDateDistance,
  formatDateTimeISO,
};

export default dateTimeUtils;
