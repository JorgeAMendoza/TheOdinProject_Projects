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

  const sendAttack = (e) => {
    const [xCord, yCord] = e.target.dataset.coordinate
      .split(',')
      .map((cord) => +cord);
    const moveResult = opponentData.getAttack(xCord, yCord);
    e.target.removeEventListener('click', sendAttack);

    switch (moveResult) {
      case 'hit':
        e.target.classList.add('placement-board__board-piece--red');
        break;

      case 'sunk':
        e.target.classList.add('placement-board__board-piece--red');
        // grabbing the current player. call the win function/lose function.
        // if win, then call render function with corrent arguments.
        break;

      default:
        e.target.classList.add('placement-board__board-piece--grey');
        break;
    }
  };

  opponentBoardDOM.forEach((piece) => {
    piece.addEventListener('click', sendAttack);
  });

  gameContainer.classList.remove('container--set-content');
};

export default renderGameArea;
