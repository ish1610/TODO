export const getDate = () => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const newDate = new Date();
  newDate.setDate(newDate.getDate());

  const month = newDate.getMonth();
  const date = newDate.getDate();
  const day = newDate.getDay();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();

  return `${month + 1}월 ${date}일 ${week[day]}요일 ${hour} : ${minute}`;
};
