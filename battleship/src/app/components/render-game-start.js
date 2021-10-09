import player from '../game-logic/player';
import writeBeginScreen from './helpers/writeBeginScreen';

const renderGameStart = (domTarget, createPlayers, renderNextStep) => {
  const gameBody = domTarget;
  writeBeginScreen(gameBody);

  const nameInputForm = gameBody.querySelector('#nameInput');
  const gameHeader = gameBody.querySelector('header');
  const gameContainer = gameBody.querySelector('.container');

  nameInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textInput = e.target.elements[0].value;

    if (textInput === '') return;

    gameContainer.classList.add('container--set-content');
    gameHeader.classList.add('game-start');
    createPlayers(textInput);
  });

  gameHeader.addEventListener('animationstart', () => {
    gameHeader.querySelector('.header-icon').classList.add('header-icon--hide');
  });

  //   What if we take in the next step in the game as a setup, and it is called within here.
  gameHeader.addEventListener('animationend', () =>
    console.log('rendering game start')
  );
};

export default renderGameStart;
