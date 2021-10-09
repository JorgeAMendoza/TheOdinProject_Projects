import writeSetupScreen from './helpers/write-setup-screen';
import ship from '../game-logic/ship';
import greyGamePiece from '../../assets/icons/other/grey-game-piece.svg';

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
        return;
      }
      canPlace = true;
      e.target.innerHTML = `<img src=${greyGamePiece} class="placement-board__game-piece">`;
    })
  );

  boardPieces.forEach((piece) =>
    piece.addEventListener('mouseleave', (e) => {
      e.target.style.setProperty('background', 'white');
    })
  );

  boardPieces.forEach((piece) =>
    piece.addEventListener('click', () => {
      if (!canPlace) return;

      // Grab the coordinates again, and over these pieces, depending on the direction, iterate over the relative pieces and write a blue square, then at the same time REMOVE the event listener so that we dont overwrite over these blue square if we hover them again.
      // Then move the arrow to the next ship, and repeat the process until we have exhouasted the ship icon array.
      shipIndex += 1;
      shiftArrowIcon(arrowPointer, shipIcons[shipIndex]);
    })
  );

  arrowPointer.classList.add('place-ships__ship-indicator--show');
  gameContainer.classList.add('container--game-active');
  gameBody.classList.add('body--game-active');
  gameContainer.classList.remove('container--set-content');
};

export default renderGameSetup;
