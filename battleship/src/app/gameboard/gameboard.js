export default function gameboard() {
  const shipBoard = Array(8)
    .fill()
    .map(() => Array(8).fill(0));
  const ships = [];

  const isTaken = (x, y) => {
    if (shipBoard[x][y] !== 0) return true;
    return false;
  };

  const canBePlaced = (shipLength, xStart, yStart, direction) => {
    let xCord = xStart;
    let yCord = yStart;
    if (direction === 'x') {
      for (let i = 0; i < shipLength; i += 1) {
        if (xCord > 7 || isTaken(xCord, yCord)) return false;
        xCord += 1;
      }
    } else {
      for (let i = 0; i < shipLength; i += 1) {
        if (yCord > 7 || isTaken(xCord, yCord)) return false;
        yCord += 1;
      }
    }

    return true;
  };

  const placeShip = (ship, x, y, direction) => {
    const shipLength = ship.getLength();
    let xCord = x;
    let yCord = y;
    if (!canBePlaced(shipLength, x, y, direction)) return false;
    // Logic to then push objectst that correspond to the ship objects.
    for (let i = 0; i < shipLength; i += 1) {
      shipBoard[xCord][yCord] = { index: i, ship };
      if (direction === 'x') xCord += 1;
      else yCord += 1;
    }

    ships.push(ship);
    return true;
  };

  const receiveAttack = (x, y) => {
    if (shipBoard[x][y] === 0) {
      shipBoard[x][y] = -1;
      return false;
    }

    const shipSpot = shipBoard[x][y].index;
    if (!shipBoard[x][y].ship.hit(shipSpot)) return false;

    shipBoard[x][y] = 1;
    return true;
  };
  // If coordinates are something, then check if its hit,
  // if not hit, then hit,
  // Check if current ship is fully sunk.

  // private function that checks if its possible to place down the ship.
  // Function that takes in a ship module, and places it down on the board.
  const allSunk = () => {};

  // private method to check if placing down is out of bounds.
  const checkSpace = () => {};
  // reciedveAttack takes in corodinates,

  //   Private method to call if attack was unncessful, changes value to -1,
  const markSpot = (status) => {};

  return {
    placeShip,
    receiveAttack,
  };
}
