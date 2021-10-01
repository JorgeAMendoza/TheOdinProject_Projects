export default function player(name, board, oppBoard) {
  const playerName = name;
  const playerBoard = board;
  const opponentBoard = oppBoard;

  const placeShip = (ship, x, y, direction) =>
    playerBoard.placeShip(ship, x, y, direction);

  // calls the oponenet board recieve attack with coordinates
  const sendAttack = (x, y) => opponentBoard.receiveAttack(x, y);

  // didPlayerWin, calls the gamebaord allSunk function.
  const didPlayerWin = () => opponentBoard.allSunk();

  const getPlayerName = () => playerName;

  return {
    placeShip,
    sendAttack,
    getPlayerName,
    didPlayerWin,
  };
}
