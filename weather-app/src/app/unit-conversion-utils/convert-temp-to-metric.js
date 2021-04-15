export const convertTempToMetric = (temp) => {
  return Math.round((temp - 32) * (5 / 9));
};
