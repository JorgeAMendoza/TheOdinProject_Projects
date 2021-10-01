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
    // Call function to write playersetup on the page
    console.log('Rendering playersetup');
    const gameContainer = document.querySelector('.container');
    setupScreen(gameContainer);
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
