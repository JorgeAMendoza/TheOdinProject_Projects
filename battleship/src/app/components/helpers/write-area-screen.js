import writeBoardPieces from './write-board-pieces';

const writeAreaScreen = (container) => {
  const containerHTML = container;

  containerHTML.innerHTML = `<h2 id="gameMessage" class="game-message header-two">Jorge's Turn</h2>
  <section class="game-active">
    <div id="playerBoard" class="placement-board">
      <h3 class="placement-board__text">Jorge's Fleet</h3>
      <div class="placement-board__board">
        ${writeBoardPieces()}
      </div>
    </div>

    <div id="enemyBoard" class="placement-board">
      <h3 class="placement-board__text header-three">Enemy Fleet</h3>
      <div class="placement-board__board">
      ${writeBoardPieces()}
      </div>
    </div>
  </section>`;
};

export default writeAreaScreen;
