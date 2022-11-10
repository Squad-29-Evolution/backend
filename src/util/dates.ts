export const getDateInMilliseconds = (date: any) => {
  const dateInString = new Date(date).toDateString().toString();
  const milliseconds = new Date(dateInString).getTime();
  return milliseconds;
};

export const thisDatesAlreadyExist = (date: Array<any>) => {
  const today = new Date();
  const todayInMilliseconds = getDateInMilliseconds(today);

  const findTodayInUser = date.filter((arrayDate) => {
    const { date } = arrayDate;
    const dateIniMilliseconds = getDateInMilliseconds(date);
    return dateIniMilliseconds == todayInMilliseconds;
  });

  if (findTodayInUser.length > 0) {
    return true;
  }

  return false;
};
