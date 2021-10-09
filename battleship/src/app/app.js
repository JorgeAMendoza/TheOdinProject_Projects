/* global document */

import gameboard from './game-logic/gameboard';
import player from './game-logic/player';
import renderGameStart from './components/render-game-start';
import setupScreen from './components/helpers/write-setup-screen';

import greyGamePiece from '../assets/icons/other/grey-game-piece.svg';

export default function app() {
  const staticDOM = {
    gameBody: document.querySelector('body'),
  };
  let playerInfo;
  let opponentInfo;
  let canPlace = true;
  let shipDirection = 'x';

  const start = () => {
    renderGameStart(staticDOM.gameBody);
  };

  return { start };
}
