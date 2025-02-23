export const formatUnitTime = (time: number) => {
  if (!time) return "00";
  return time < 10 ? `0${time}` : time;
};
