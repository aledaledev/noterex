export default (date: string) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = date.split("-");
  currentDate[1] = monthNames[+currentDate[1] -1];
  return currentDate.reverse().join(" ");
};
