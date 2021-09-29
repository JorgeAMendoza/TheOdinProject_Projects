import battleShipIcon from '../../assets/icons/ship-icons/battleship.svg';

// File that will handle the namee input
// More specifially, contain the html to write into the page.

// Can it take in the body, and add the event listeners here?

const beginScreen = (body) => {
  const pageBody = body;
  pageBody.innerHTML = `<header>
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

export default beginScreen;
