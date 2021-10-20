import writeAreaScreen from './helpers/write-area-screen';

const renderGameArea = (domTarget, player, opponent) => {
  const gameBody = domTarget;
  const gameContainer = gameBody.querySelector('.container');
  writeAreaScreen(gameContainer);
  const playerBoardDOM = gameBody.querySelectorAll(
    '#playerBoard .placement-board__board-piece'
  );
  const opponentBoardDOM = gameBody.querySelectorAll(
    '#enemyBoard .placement-board__board-piece'
  );

  const playerData = player;
  const opponentData = opponent;

  const playerGameboard = playerData.getBoard();
  const opponentGameBoard = opponentData.getBoard();

  const sendAttack = (xCord, yCord, attackedPlayer) => {
    const moveResult = attackedPlayer.getAttack(xCord, yCord);
    console.log(moveResult);
  };

  opponentBoardDOM.forEach((piece) => {
    const [xCord, yCord] = piece.dataset.coordinate
      .split(',')
      .map((cord) => +cord);

    piece.addEventListener('click', () =>
      sendAttack(xCord, yCord, opponentData)
    );
  });

  gameContainer.classList.remove('container--set-content');
};

export default renderGameArea;
