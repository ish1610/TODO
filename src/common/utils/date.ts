export const getDate = () => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const newDate = new Date();
  newDate.setDate(newDate.getDate());

  const month = newDate.getMonth();
  const date = newDate.getDate();
  const day = newDate.getDay();
  let hour: string | number = newDate.getHours();
  let minute: string | number = newDate.getMinutes();

  if (+minute < 10) {
    minute = `0${minute}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  return `${month + 1}월 ${date}일 ${week[day]}요일 ${hour} : ${minute}`;
};

getDate();
