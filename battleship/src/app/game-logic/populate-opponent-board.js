import ship from './ship';

const populateOpponentBoard = (opponentInfo) => {
  const calledCoordinates = {};
  const ships = [
    ship('Carrier', 5),
    ship('Battleship', 4),
    ship('Destroyer', 3),
    ship('Submarine', 3),
    ship('Patrol Boat', 2),
  ];
  let shipIndex = 0;

  const randomBetweenNine = () => Math.floor(Math.random() * 10);
  const randomBetweenTwo = () => Math.floor(Math.random() * 2);

  while (shipIndex < ship.length) {
    const xCord = randomBetweenNine();
    const yCord = randomBetweenNine();
    const shipDirection = randomBetweenTwo() === 0 ? 'x' : 'y';
    const currentShip = ships[shipIndex];
    const currentCord = `${xCord},${yCord}`;

    if (currentCord in calledCoordinates) continue;

    if (opponentInfo.canPlace(currentShip, xCord, yCord, shipDirection)) {
      opponentInfo.placeShip(currentShip, xCord, yCord, ship);
      shipIndex += 1;
    }

    calledCoordinates[currentCord] = true;
  }
};

export default populateOpponentBoard;
