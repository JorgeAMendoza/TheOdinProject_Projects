import ship from './game-logic/ship';
import gameboard from './game-logic/gameboard';
import player from './game-logic/player';
import renderGameStart from './components/render-game-start';
import setupScreen from './components/setupScreen';

import greyGamePiece from '../assets/icons/other/grey-game-piece.svg';

export default function app() {
  const staticDOM = {
    gameBody: document.querySelector('body'),
  };
  let playerInfo;
  let opponentInfo;
  let canPlace = true;
  let shipDirection = 'x';

  const shiftArrowIcon = (arrow, shipIcon) => {
    const shipPosition = shipIcon.getBoundingClientRect();
    arrow.style.setProperty(
      'transform',
      `translate(${shipPosition.left + 12}px, 220px) rotate(180deg)`
    );
  };

  const initializePlayers = (playerName) => {
    playerInfo = player(playerName, gameboard());
    opponentInfo = player('Enemy', gameboard());
  };

  const renderPlayerSetup = () => {
    const gameContainer = document.querySelector('.container');
    setupScreen(gameContainer);

    // Grab all DOM Elements that are needed
    const shipIcons = document.querySelectorAll('.place-ships__ship-icon');
    const arrowPointer = document.querySelector('.place-ships__ship-indicator');
    const errorText = document.querySelector('.placement-board__text');
    const changeAxisButton = document.querySelector('.btn');
    const boardPieces = document.querySelectorAll(
      '.placement-board__board-piece'
    );

    // Keep track of current ship being placed.
    const shipArray = [
      ship('Carrier', 5),
      ship('Battleship', 4),
      ship('Destroyer', 3),
      ship('Submarine', 3),
      ship('Patrol Boat', 2),
    ];
    let shipIndex = 0;

    arrowPointer.classList.add('place-ships__ship-indicator--show');
    shiftArrowIcon(arrowPointer, shipIcons[shipIndex]);

    boardPieces.forEach((piece) =>
      piece.addEventListener('mouseenter', (e) => {
        const [xCord, yCord] = e.target.dataset.coordinate
          .split(',')
          .map((cord) => Number(cord));

        if (
          !playerInfo.canPlace(
            shipArray[shipIndex],
            xCord,
            yCord,
            shipDirection
          )
          // Write a red piece into the board piece
        ) {
          canPlace = false;
          return;
        }
        canPlace = true;
        // e.target.innerHTML = `<img src=${greyGamePiece} class="placement-board__game-piece">`;
        // Lets grab the current cord (we have) and if the direction is x, then iterate over the relative pieces and add a grey square.
        // if true, lets start with placing a grey circle within the item/place the background.
        // How do we insert grey circles if the spot is valid?
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

    // Display Content once everything has been prepared.
    gameContainer.classList.add('container--game-active');
    staticDOM.gameBody.classList.add('body--game-active');
    gameContainer.classList.remove('container--set-content');
  };

  const start = () => {
    renderGameStart(staticDOM.gameBody, initializePlayers);
  };

  return { start };
}
