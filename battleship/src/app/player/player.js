export default function player(name, playerBoard, opponentBoard) {
  const playerName = name;

  // placeship, places ship on the gameboard, returns false if not possible.
  const placeShip = (ship, x, y, direction) =>
    playerBoard.placeShip(ship, x, y, direction);

  // attackOponent
  // calls the oponenet board recieve attack with coordinates
  const sendAttack = (x, y) => opponentBoard.receiveAttack(x, y);

  // didLastShipSink, should check if the last ship coordinate ship sunk. *

  // didPlayerWin, calls the gamebaord allSunk function.

  return {
    placeShip,
    sendAttack,
  };
}
