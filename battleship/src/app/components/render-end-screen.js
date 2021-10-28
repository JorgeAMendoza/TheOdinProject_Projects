import writeEndScreen from './helpers/write-end-screen';
import whiteFlag from '../../assets/icons/other/white-flag.svg';
import skullIcon from '../../assets/icons/other/lose-skull.svg';

const renderEndScreen = (domTarget, winner, winnerName) => {
  const gameBody = domTarget;
  const gameContainer = gameBody.querySelector('.container');
  const winnerMessage = 'Your opponent has waved the white flag';
  const loserMessage = 'Your entire fleet has been sunk';
  if (winner === 'player') {
    writeEndScreen(gameContainer, whiteFlag, winnerName, winnerMessage);
  } else writeEndScreen(gameContainer, skullIcon, winnerName, loserMessage);

  const resetGame = () => {
    // Grab button to reset the game.
    // Within the event listener, call the renderGameStart function.
    // Remove opacity again.
    // Call the render function,
    // Add the class to add opacity back.\
    console.log('resetting game');
  };
  const resetButton = gameBody.querySelector('#resetGame');
  resetButton.addEventListener('click', resetGame);
};

export default renderEndScreen;
