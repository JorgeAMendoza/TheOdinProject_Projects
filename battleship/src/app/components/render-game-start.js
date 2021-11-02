import writeBeginScreen from './helpers/write-begin-screen';
import player from '../game-logic/player';
import gameboard from '../game-logic/gameboard';

const initializePlayers = (playerName) => ({
  player: player(playerName, gameboard()),
  opponent: player('Opponent', gameboard()),
});

const renderGameStart = (domTarget, domController) => {
  const gameBody = domTarget;
  writeBeginScreen(gameBody);

  const nameInputForm = gameBody.querySelector('#nameInput');
  const gameHeader = gameBody.querySelector('header');
  const gameContainer = gameBody.querySelector('.container');
  let playerData;

  nameInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textInput = e.target.elements[0].value;

    if (textInput === '') return;

    gameContainer.classList.add('container--set-content');
    gameHeader.classList.add('game-start');
    playerData = initializePlayers(textInput);
  });

  gameHeader.addEventListener('animationstart', () => {
    gameHeader.querySelector('.header-icon').classList.add('header-icon--hide');
  });

  gameHeader.addEventListener('animationend', () =>
    domController.renderSetup(domController, playerData)
  );
};

export default renderGameStart;
