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
  const opponentMoves = {};
  let playerTurn = true;

  const opponentSendAttack = () => {
    if (playerTurn) return;
    let xCord = Math.floor(Math.random() * 10);
    let yCord = Math.floor(Math.random() * 10);

    while (opponentMoves[`${xCord},${yCord}`]) {
      xCord = Math.floor(Math.random() * 10);
      yCord = Math.floor(Math.random() * 10);
    }

    opponentMoves[`${xCord},${yCord}`] = true;
    const playerDOMCord = xCord * 10 + (yCord % 10);
    const moveResult = playerData.getAttack(xCord, yCord);

    switch (moveResult) {
      case 'hit':
        playerBoardDOM[playerDOMCord].classList.add(
          'placement-board__board-piece--red'
        );
        opponentSendAttack();
        break;

      case 'sunk':
        playerBoardDOM[playerDOMCord].classList.add(
          'placement-board__board-piece--red'
        );
        opponentSendAttack();
        break;

      case 'win':
        playerBoardDOM[playerDOMCord].classList.add(
          'placement-board__board-piece--red'
        );
        break;

      default:
        playerTurn = true;
        playerBoardDOM[playerDOMCord].classList.add(
          'placement-board__board-piece--grey'
        );
        break;
    }
  };

  const playerSendAttack = (e) => {
    if (!playerTurn) return;
    const [xCord, yCord] = e.target.dataset.coordinate
      .split(',')
      .map((cord) => +cord);
    const moveResult = opponentData.getAttack(xCord, yCord);
    e.target.removeEventListener('click', playerSendAttack);

    switch (moveResult) {
      case 'hit':
        playerTurn = true;
        e.target.classList.add('placement-board__board-piece--red');
        break;

      case 'sunk':
        playerTurn = true;
        e.target.classList.add('placement-board__board-piece--red');
        break;

      case 'win':
        e.target.classList.add('placement-board__board-piece--red');
        break;

      default:
        e.target.classList.add('placement-board__board-piece--grey');
        playerTurn = false;
        break;
    }
    opponentSendAttack();
  };

  opponentBoardDOM.forEach((piece) => {
    piece.addEventListener('click', playerSendAttack);
  });

  gameContainer.classList.remove('container--set-content');
};

export default renderGameArea;
