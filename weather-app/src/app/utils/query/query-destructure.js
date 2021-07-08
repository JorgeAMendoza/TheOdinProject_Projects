export const queryDestructure = (query) => {
  const userSearchArray = query.replace(/,/, "").split(" ");
  const userCity = userSearchArray
    .slice(0, userSearchArray.length - 1)
    .join(" ");
  const userState = userSearchArray[userSearchArray.length - 1];

  return [userCity, userState];
};
