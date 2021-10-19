import writeSetupScreen from './helpers/write-setup-screen';
import populateOpponentBoard from '../game-logic/populate-opponent-board';
import ship from '../game-logic/ship';

const shiftArrowIcon = (arrow, shipIcon) => {
  const shipPosition = shipIcon.getBoundingClientRect();
  arrow.style.setProperty(
    'transform',
    `translate(${shipPosition.left + 12}px, 220px) rotate(180deg)`
  );
};

const renderGameSetup = (domTarget, playerData) => {
  const gameBody = domTarget;
  const gameContainer = domTarget.querySelector('.container');
  writeSetupScreen(gameContainer);

  const shipIcons = gameContainer.querySelectorAll('.place-ships__ship-icon');
  const arrowPointer = gameContainer.querySelector(
    '.place-ships__ship-indicator'
  );
  const errorText = gameContainer.querySelector('.placement-board__text');
  const changeAxisButton = gameContainer.querySelector('.btn');
  const boardPieces = gameContainer.querySelectorAll(
    '.placement-board__board-piece'
  );

  const { player: playerInfo, opponent: opponentInfo } = playerData;
  let canPlace = false;
  let shipDirection = 'x';

  const shipArray = [
    ship('Carrier', 5),
    ship('Battleship', 4),
    ship('Destroyer', 3),
    ship('Submarine', 3),
    ship('Patrol Boat', 2),
  ];
  let shipIndex = 0;

  // Need function for writing classes onto the board.
  const modifyGamePieces = (
    xCord,
    yCord,
    direction,
    gamePieceName,
    removeClass = false
  ) => {
    if (direction === 'x') {
      for (
        let i = yCord;
        i < yCord + shipArray[shipIndex].getLength();
        i += 1
      ) {
        const writePieceY = i;
        const boardPiece = xCord * 10 + writePieceY;
        if (removeClass) {
          boardPieces[boardPiece].classList.remove(gamePieceName);
        } else boardPieces[boardPiece].classList.add(gamePieceName);
      }
    } else {
      for (
        let i = xCord;
        i < xCord + shipArray[shipIndex].getLength();
        i += 1
      ) {
        const writePieceX = i;
        const boardPiece = writePieceX * 10 + yCord;
        if (removeClass) {
          boardPieces[boardPiece].classList.remove(gamePieceName);
        } else boardPieces[boardPiece].classList.add(gamePieceName);
      }
    }
  };

  const changeShipDirection = () => {
    if (shipDirection === 'x') {
      shipDirection = 'y';
    } else {
      shipDirection = 'x';
    }
  };

  const mouseEnterPiece = (e) => {
    const [xCord, yCord] = e.target.dataset.coordinate
      .split(',')
      .map((cord) => Number(cord));
    if (
      !playerInfo.canPlace(shipArray[shipIndex], xCord, yCord, shipDirection)
    ) {
      canPlace = false;
      e.target.classList.add('placement-board__board-piece--red');
      return;
    }
    canPlace = true;
    modifyGamePieces(
      xCord,
      yCord,
      shipDirection,
      'placement-board__board-piece--grey'
    );
  };

  const mouseLeavePiece = (e) => {
    if (!canPlace) {
      e.target.classList.remove('placement-board__board-piece--red');
      return;
    }
    const [xCord, yCord] = e.target.dataset.coordinate
      .split(',')
      .map((cord) => Number(cord));

    modifyGamePieces(
      xCord,
      yCord,
      shipDirection,
      'placement-board__board-piece--grey',
      true
    );
  };

  const mouseClickPiece = (e) => {
    if (!canPlace) return;
    const [xCord, yCord] = e.target.dataset.coordinate
      .split(',')
      .map((cord) => Number(cord));

    modifyGamePieces(
      xCord,
      yCord,
      shipDirection,
      'placement-board__board-piece--grey',
      true
    );

    modifyGamePieces(
      xCord,
      yCord,
      shipDirection,
      'placement-board__board-piece--blue'
    );

    if (shipDirection === 'x') {
      for (
        let i = yCord;
        i < yCord + shipArray[shipIndex].getLength();
        i += 1
      ) {
        const writePieceY = i;
        const boardPiece = xCord * 10 + writePieceY;
        boardPieces[boardPiece].removeEventListener(
          'mouseenter',
          mouseEnterPiece
        );
        boardPieces[boardPiece].removeEventListener(
          'mouseleave',
          mouseLeavePiece
        );
        boardPieces[boardPiece].removeEventListener('click', mouseClickPiece);
      }
    } else {
      for (
        let i = xCord;
        i < xCord + shipArray[shipIndex].getLength();
        i += 1
      ) {
        const writePieceX = i;
        const boardPiece = writePieceX * 10 + yCord;
        boardPieces[boardPiece].removeEventListener(
          'mouseenter',
          mouseEnterPiece
        );
        boardPieces[boardPiece].removeEventListener(
          'mouseleave',
          mouseLeavePiece
        );
        boardPieces[boardPiece].removeEventListener('click', mouseClickPiece);
      }
    }

    playerInfo.placeShip(shipArray[shipIndex], xCord, yCord, shipDirection);

    if (shipIndex === 4) {
      console.log('rendering game area');
      populateOpponentBoard(opponentInfo);
      return;
    }

    shipIndex += 1;
    shiftArrowIcon(arrowPointer, shipIcons[shipIndex]);
  };

  shiftArrowIcon(arrowPointer, shipIcons[0]);

  // Set Event Listeners
  boardPieces.forEach((piece) => {
    piece.addEventListener('mouseenter', mouseEnterPiece);
    piece.addEventListener('mouseleave', mouseLeavePiece);
    piece.addEventListener('click', mouseClickPiece);
  });
  changeAxisButton.addEventListener('click', changeShipDirection);

  arrowPointer.classList.add('place-ships__ship-indicator--show');
  gameContainer.classList.add('container--game-active');
  gameBody.classList.add('body--game-active');
  gameContainer.classList.remove('container--set-content');
};

export default renderGameSetup;
