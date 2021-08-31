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
    if (shipBoard[x][y] === 0) return false;

    const { ship, index } = shipBoard[x][y];
    if (!ship.hit(index)) return false;
    return true;
  };

  const allSunk = () => {
    for (let i = 0; i < ships.length; i += 1) {
      if (!ships[i].isSunk()) return false;
    }
    return true;
  };

  return {
    placeShip,
    receiveAttack,
    allSunk,
  };
}
