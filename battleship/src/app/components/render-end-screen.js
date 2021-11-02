import writeEndScreen from './helpers/write-end-screen';
import whiteFlag from '../../assets/icons/other/white-flag.svg';
import skullIcon from '../../assets/icons/other/lose-skull.svg';

const renderEndScreen = (domTarget, winner, winnerName, domController) => {
  const gameBody = domTarget;
  const gameContainer = gameBody.querySelector('.container');
  const winnerMessage = 'Your opponent has waved the white flag';
  const loserMessage = 'Your entire fleet has been sunk';
  if (winner === 'player') {
    writeEndScreen(gameContainer, whiteFlag, winnerName, winnerMessage);
  } else writeEndScreen(gameContainer, skullIcon, winnerName, loserMessage);

  const resetButton = gameBody.querySelector('#resetGame');
  resetButton.addEventListener('click', () => {
    domController.renderStart(domController);
  });
};

export default renderEndScreen;
