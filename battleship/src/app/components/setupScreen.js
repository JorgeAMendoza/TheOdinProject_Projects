import carrierShip from '../../assets/icons/ship-icons/carrier.svg';
import battleShip from '../../assets/icons/ship-icons/battleship.svg';
import destroyerShip from '../../assets/icons/ship-icons/destroyer.svg';
import patrolBoat from '../../assets/icons/ship-icons/patrol-boat.svg';
import submarine from '../../assets/icons/ship-icons/submarine.svg';
import arrowIcon from '../../assets/icons/other/arrow.svg';
import writeBoardPieces from './helpers/writeBoardPieces';

const setupScreen = (container) => {
  const containerHTML = container;
  containerHTML.innerHTML = `<h2 class="game-message header-two">Place Your Fleet</h2>
  <section id="gameSetup" class="game-setup">
    <div class="place-ships">
      <img
        src=${carrierShip}
        alt="Carrier Ship"
        class="place-ships__ship-icon"
      />
      <img
        src=${battleShip}
        alt="Battle ship"
        class="place-ships__ship-icon"
      />
      <img
        src=${destroyerShip}
        alt="Destroyer Ship"
        class="place-ships__ship-icon"
      />
      <img
        src=${submarine}
        alt="Submarine"
        class="place-ships__ship-icon"
      />
      <img
        src=${patrolBoat}
        alt="Patrol Boat"
        class="place-ships__ship-icon"
      />
      <img
        src=${arrowIcon}
        alt="Pointing to current ship"
        class="place-ships__ship-indicator"
        aria-hidden = "true"
      />
    </div>

    <div class="placement-board">
      <h3 class="placement-board__text"></h3>
      <button id="axisChange" class="btn">Change Direction</button>
      <div class="placement-board__board">
        ${writeBoardPieces()}
      </div>
    </div>
  </section>`;
};

export default setupScreen;
