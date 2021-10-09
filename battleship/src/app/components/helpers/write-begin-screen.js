import battleShipIcon from '../../../assets/icons/ship-icons/battleship.svg';

const writeBeginScreen = (body) => {
  const gameBody = body;
  gameBody.innerHTML = `<header>
    <h1 class="game-title header-one">Battleship</h1>
    <div class="header-icon">
      <img
        src=${battleShipIcon}
        alt="Battleship Icon"
      />
    </div>
  </header>

  <main class="container">
    <h2 class="game-message header-two">Please Enter Your Name</h2>
    <form id="nameInput" class="name-input">
      <input type="text" name="playerName" id="playerName" class="input" />
      <button class="btn">Start</button>
    </form>
    </main>`;
};

export default writeBeginScreen;
