export const parsedTime = (date: Date) => {
  const year = new Date(date).getFullYear();
  const monthNumber = date.getMonth();
  const startDate = new Date(year, monthNumber, 1);
  const endDate = new Date(year, monthNumber + 1, 0);
  const formattedStartDate = startDate.toISOString().split("T")[0];
  const formattedEndDate = endDate.toISOString().split("T")[0];
  return {
    year,
    monthNumber,
    startDate,
    endDate,
    formattedStartDate,
    formattedEndDate,
  };
};
