export default gameboard = () => {
  const shipBoard = Array.from(Array(8), () => new Array(8)).fill(0);
  const ships = [];
  let shipPlacementDirection = 'x';
  //   Somehow keep track of all current ships, be able to iterate over them and call isSunkFunciton, but only if a ship was just sunk.
  // Function that takes in a ship module, and places it down on the board.
  const allSunk = () => {};

  const placeShip = (ship, x, y) => {
    // Check array and see if there is a a ship already there, basically not null,
    // if the first coordindate is zero, then check up or down depending on axis and length of theip.
    // if it hits anything else than 0, then throw an error.
    // else, place the ship.
  };
  // private method to check if placing down is out of bounds.
  const checkSpace = () => {};
  // reciedveAttack takes in corodinates,
  const receiveAttack = (x, y) => {};
  // If coordinates are 0, then return
  // If coordinates are something, then check if its hit,
  // if not hit, then hit,
  // Check if current ship is fully sunk.

  //   Private method to call if attack was unncessful, changes value to -1,
  const markSpot = (status) => {};
};
