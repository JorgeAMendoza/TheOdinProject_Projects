import writeSetupScreen from './helpers/write-setup-screen';
import ship from '../game-logic/ship';
import greyGamePiece from '../../assets/icons/other/grey-game-piece.svg';
import redGamepiece from '../../assets/icons/other/red-game-piece.svg';

const shiftArrowIcon = (arrow, shipIcon) => {
  const shipPosition = shipIcon.getBoundingClientRect();
  arrow.style.setProperty(
    'transform',
    `translate(${shipPosition.left + 12}px, 220px) rotate(180deg)`
  );
};

const renderGameSetup = (domTarget, playerData, OpponentData) => {
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

  const { player: playerInfo } = playerData;
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

  shiftArrowIcon(arrowPointer, shipIcons[0]);

  // Set Event Listeners
  boardPieces.forEach((piece) =>
    piece.addEventListener('mouseenter', (e) => {
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

      if (shipDirection === 'x') {
        for (
          let i = yCord;
          i < yCord + shipArray[shipIndex].getLength();
          i += 1
        ) {
          // Get the current Ycord and xcord, in this case i is y.
          const writePieceY = i;
          const boardPiece = xCord * 10 + writePieceY;
          boardPieces[boardPiece].classList.add(
            'placement-board__board-piece--grey'
          );
        }
      } else {
        for (
          let i = xCord;
          i < xCord + shipArray[shipIndex].getLength();
          i += 1
        ) {
          // Get the current xCord and xcord, in this case i is y.
          const writePieceX = i;
          const boardPiece = writePieceX * 10 + yCord;
          boardPieces[boardPiece].classList.add(
            'placement-board__board-piece--grey'
          );
        }
      }
    })
  );

  boardPieces.forEach((piece) =>
    piece.addEventListener('mouseleave', (e) => {
      if (!canPlace) {
        e.target.classList.remove('placement-board__board-piece--red');
        return;
      }
      const [xCord, yCord] = e.target.dataset.coordinate
        .split(',')
        .map((cord) => Number(cord));

      if (shipDirection === 'x') {
        for (
          let i = yCord;
          i < yCord + shipArray[shipIndex].getLength();
          i += 1
        ) {
          // Get the current Ycord and xcord, in this case i is y.
          const writePieceY = i;
          const boardPiece = xCord * 10 + writePieceY;
          boardPieces[boardPiece].classList.remove(
            'placement-board__board-piece--grey'
          );
        }
      } else {
        for (
          let i = xCord;
          i < xCord + shipArray[shipIndex].getLength();
          i += 1
        ) {
          // Get the current Ycord and xcord, in this case i is y.
          const writePieceX = i;
          const boardPiece = writePieceX * 10 + yCord;
          boardPieces[boardPiece].classList.remove(
            'placement-board__board-piece--grey'
          );
        }
      }
    })
  );

  boardPieces.forEach((piece) =>
    piece.addEventListener('click', (e) => {
      if (!canPlace) return;
      const [xCord, yCord] = e.target.dataset.coordinate
        .split(',')
        .map((cord) => Number(cord));

      if (shipDirection === 'x') {
        for (
          let i = yCord;
          i < yCord + shipArray[shipIndex].getLength();
          i += 1
        ) {
          // Get the current Ycord and xcord, in this case i is y.
          const writePieceY = i;
          const boardPiece = xCord * 10 + writePieceY;
          boardPieces[boardPiece].classList.add(
            'placement-board__board-piece--blue'
          );
          playerInfo.placeShip(
            shipArray[shipIndex],
            xCord,
            yCord,
            shipDirection
          );
        }
      } else {
        for (
          let i = xCord;
          i < xCord + shipArray[shipIndex].getLength();
          i += 1
        ) {
          // Get the current Ycord and xcord, in this case i is y.
          const writePieceX = i;
          const boardPiece = writePieceX * 10 + yCord;
          boardPieces[boardPiece].classList.remove(
            'placement-board__board-piece--grey'
          );
        }
      }

      // So now we need to write the blue squares onto the spaces.
      // After we write the blue squares, we remove the mouseenter, mouseleave, and click events.
      // Use same logic as above.

      // // Then move the arrow to the next ship, and repeat the process until we have exhouasted the ship icon array.
      // shipIndex += 1;
      // shiftArrowIcon(arrowPointer, shipIcons[shipIndex]);
    })
  );

  changeAxisButton.addEventListener('click', () => {
    if (shipDirection === 'x') {
      shipDirection = 'y';
    } else {
      shipDirection = 'x';
    }
  });

  arrowPointer.classList.add('place-ships__ship-indicator--show');
  gameContainer.classList.add('container--game-active');
  gameBody.classList.add('body--game-active');
  gameContainer.classList.remove('container--set-content');
};

export default renderGameSetup;
