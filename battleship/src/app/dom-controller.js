import renderEndScreen from './components/render-end-screen';
import renderGameArea from './components/render-game-area';
import renderGameSetup from './components/render-game-setup';
import renderGameStart from './components/render-game-start';

const domController = () => {
  const documentBody = document.querySelector('body');

  const renderStartScreen = (controller) =>
    renderGameStart(documentBody, controller);

  const renderSetupScreen = (controller, playerData) => {
    renderGameSetup(documentBody, playerData, controller);
  };

  const renderGameActive = (controller, playerData, opponentData) => {
    renderGameArea(documentBody, playerData, opponentData, controller);
  };

  const renderEndOfGame = (controller, player, playerName) => {
    documentBody.classList.remove('body--game-active');
    renderEndScreen(documentBody, player, playerName, controller);
  };

  return {
    renderStart: renderStartScreen,
    renderSetup: renderSetupScreen,
    renderArea: renderGameActive,
    renderEnd: renderEndOfGame,
  };
};

export default domController;
