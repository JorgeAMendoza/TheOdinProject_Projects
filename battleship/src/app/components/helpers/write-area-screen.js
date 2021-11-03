import writeBoardPieces from './write-board-pieces';

const writeAreaScreen = (container, playerName) => {
  const containerHTML = container;

  containerHTML.innerHTML = `
  <section class="game-active">
    <div id="playerBoard" class="placement-board">
      <h3 class="placement-board__text">${playerName}'s Fleet</h3>
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
