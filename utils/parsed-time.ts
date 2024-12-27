export const parsedTime = (date: Date) => {
  const year = new Date(date).getFullYear();
  const monthNumber = date.getMonth();
  const startDate = new Date(year, monthNumber, 1);
  const endDate = new Date(year, monthNumber + 1, 0);

  // Use local timezone formatting instead of UTC
  const formattedStartDate = startDate
    .toLocaleDateString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");
  const formattedEndDate = endDate
    .toLocaleDateString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  return {
    year,
    monthNumber,
    startDate,
    endDate,
    formattedStartDate,
    formattedEndDate,
  };
};
