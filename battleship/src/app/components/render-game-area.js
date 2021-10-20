import writeAreaScreen from './helpers/write-area-screen';

const renderGameArea = (domTarget, player, opponent) => {
  const gameBody = domTarget;
  const gameContainer = gameBody.querySelector('.container');
  writeAreaScreen(gameContainer);

  const playerData = player;
  const opponentData = opponent;

  gameContainer.classList.remove('container--set-content');
};

export default renderGameArea;
