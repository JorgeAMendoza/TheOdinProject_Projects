import ship from './game-logic/ship';
import beginScreen from './components/beginScreen';
import setupScreen from './components/setupScreen';

export default function app() {
  const staticDOM = {
    gameBody: document.querySelector('body'),
  };
  let playerName;

  const shiftArrowIcon = (arrow, shipIcon) => {
    const shipPosition = shipIcon.getBoundingClientRect();
    arrow.style.setProperty(
      'transform',
      `translate(${shipPosition.left + 12}px, ${
        shipPosition.top
      }px) rotate(180deg)`
    );
  };

  const setPlayerName = (event, header, container) => {
    event.preventDefault();
    if (event.target.elements[0].value === '') return;
    playerName = event.target.elements[0].value;
    container.classList.add('container--set-content');
    header.classList.add('game-start');
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
    console.log(shipArray);

    // Start off by giving the arrow the appear class.
    arrowPointer.classList.add('place-ships__ship-indicator--show');
    shiftArrowIcon(arrowPointer, shipIcons[3]);
    // Set property on the arrow class, set transform in notes.

    // So we are going to need to grab each game piece, and the arrow that is going to move from ship to ship.

    // fOR spaces
    boardPieces.forEach((piece) =>
      piece.addEventListener('mouseenter', (e) => {
        e.target.style.setProperty('background', 'black');
      })
    );

    boardPieces.forEach((piece) =>
      piece.addEventListener('mouseleave', (e) => {
        e.target.style.setProperty('background', 'white');
      })
    );
    // Iterate over the node list to set event listner.
    // For a hover event, set a grey square, "hover in and hover out"
    // For hover in, set text content to grey circle.
    // on click, check to see if space is valid, if not then place a red dot and write the error message.
    // On hover out, wipe markup and repeat process.
    // if spot is valid, then remove error message, grab spaces that belong in that row, (x or y) and write blue circles within then.
    // Then move the arrow to the next ship, and repeat the process until we have exhouasted the ship icon array.

    // Display Content once everything has been prepared.
    gameContainer.classList.add('container--game-active');
    staticDOM.gameBody.classList.add('body--game-active');
    gameContainer.classList.remove('container--set-content');
  };

  const renderGameStart = () => {
    beginScreen(staticDOM.gameBody);
    const nameInputForm = document.querySelector('#nameInput');
    const gameHeader = document.querySelector('header');
    const gameContainer = document.querySelector('.container');
    nameInputForm.addEventListener('submit', (e) => {
      setPlayerName(e, gameHeader, gameContainer);
    });

    gameHeader.addEventListener('animationstart', () => {
      gameHeader
        .querySelector('.header-icon')
        .classList.add('header-icon--hide');
    });
    gameHeader.addEventListener('animationend', renderPlayerSetup);
  };

  const start = () => {
    renderGameStart();
  };

  return { start };
}
