export default function player(name, board) {
  const playerName = name;
  const playerBoard = board;

  const placeShip = (ship, x, y, direction) =>
    playerBoard.placeShip(ship, x, y, direction);

  const canPlace = (ship, x, y, direction) =>
    playerBoard.canBePlaced(ship, x, y, direction);

  const getAttack = (x, y) => playerBoard.receiveAttack(x, y);

  const getPlayerName = () => playerName;

  return {
    placeShip,
    getPlayerName,
    getAttack,
    canPlace,
  };
}
