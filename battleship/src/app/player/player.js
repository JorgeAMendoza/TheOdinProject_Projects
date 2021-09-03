export default function player(name, oppBoard, playBoard) {
  const playerName = name;
  const enemyBoard = oppBoard;
  const playerBoard = playBoard;

  // placeship, places ship on the gameboard, returns false if not possible.
  const placeShip = (ship, x, y, direction) => {
    if (playerBoard.placeShip(ship, x, y, direction)) return true;
    return false;
  };

  // attackOponent
  // calls the oponenet board recieve attack with coordinates

  // didLastShipSink, should check if the last ship coordinate ship sunk. *

  // didPlayerWin, calls the gamebaord allSunk function.

  return {
    placeShip,
  };
}
