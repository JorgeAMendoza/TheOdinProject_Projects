import beginScreen from './components/beginScreen';
import setupScreen from './components/setupScreen';

export default function app() {
  const staticDOM = {
    gameBody: document.querySelector('body'),
  };
  let playerName;

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
    gameContainer.classList.add('container--game-active');
    staticDOM.gameBody.classList.add('body--game-active');
    gameContainer.classList.remove('container--set-content');

    // Set events.

    // So we are going to need to grab each game piece, and the arrow that is going to move from ship to ship. 

    // fOR spaces 
    // Const grab each one. 
    // Iterate over the node list to set event listner. 
    // For a hover event, set a grey square, "hover in and hover out"
    // For hover in, set text content to grey circle. 
    // on click, check to see if space is valid, if not then place a red dot and write the error message. 
    // On hover out, wipe markup and repeat process. 
    // if spot is valid, then remove error message, grab spaces that belong in that row, (x or y) and write blue circles within then. 
    // Then move the arrow to the next ship, and repeat the process until we have exhouasted the ship icon array.  
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
