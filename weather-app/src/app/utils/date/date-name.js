export const dateName = (dateNumber) => {
  const stringNumber = String(dateNumber);
  const lastNumber = stringNumber.charAt(stringNumber.length - 1);

  if (stringNumber.length === 2 && lastNumber === "0") return `${dateNumber}th`;
  switch (lastNumber) {
    case "1":
      return `${dateNumber}st`;
    case "2":
      return `${dateNumber}nd`;
    case "3":
      return `${dateNumber}rd`;
    default:
      return `${dateNumber}th`;
  }
};
