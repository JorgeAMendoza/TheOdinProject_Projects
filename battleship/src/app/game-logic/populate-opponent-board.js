import ship from './ship';

const populateOpponentBoard = (opponentInfo) => {
  const calledCoordinates = [];
  const ships = [
    ship('Carrier', 5),
    ship('Battleship', 4),
    ship('Destroyer', 3),
    ship('Submarine', 3),
    ship('Patrol Boat', 2),
  ];

  const randomBetweenNine = () => Math.floor(Math.random() * 10);
  const randomBetweenTwo = () => Math.floor(Math.random() * 2);

  for (let i = 0; i < ships.length; i += 1) {
    const xCord = randomBetweenNine();
    const yCord = randomBetweenNine();
    const shipDirection = randomBetweenTwo() === 0 ? 'x' : 'y';
    const currentShip = ships[i];
    const currentCord = `${xCord},${yCord}`;

    if (calledCoordinates.includes(currentCord)) {
      i -= 1;
    } else if (
      !opponentInfo.canPlace(currentShip, xCord, yCord, shipDirection)
    ) {
      calledCoordinates.push(currentCord);
      i -= 1;
    } else {
      opponentInfo.placeShip(currentShip, xCord, yCord, shipDirection);
      calledCoordinates.push(currentCord);
    }
  }
};

export default populateOpponentBoard;
