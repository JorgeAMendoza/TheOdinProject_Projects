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
      // e.target.innerHTML = `<img src=${greyGamePiece} class="placement-board__game-piece">`;
      // Now we need to write the grey square corresponding to the the direction.
      // So if the current direction is x, need to grab the current y coordinate and iterate until its
      // the current coordinate plus 5.
      // So we will no longer need the event target but the board pieces.
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

      // Same thing for other direciton, but instead with the x direciton.
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
    })
  );

  boardPieces.forEach((piece) =>
    piece.addEventListener('click', (e) => {
      if (!canPlace) return;
      console.log(e);
      e.stopImmediatePropagation();
      console.log(e.target);
      console.log(e.target.dataset.coordinate);
      // const [xCord, yCord] = e.target.dataset.coordinate
      //   .split(',')
      //   .map((cord) => Number(cord));

      // console.log(xCord, yCord);

      // // Then move the arrow to the next ship, and repeat the process until we have exhouasted the ship icon array.
      // shipIndex += 1;
      // shiftArrowIcon(arrowPointer, shipIcons[shipIndex]);
    })
  );

  arrowPointer.classList.add('place-ships__ship-indicator--show');
  gameContainer.classList.add('container--game-active');
  gameBody.classList.add('body--game-active');
  gameContainer.classList.remove('container--set-content');
};

export default renderGameSetup;
