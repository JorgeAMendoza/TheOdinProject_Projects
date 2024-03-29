const writeEndScreen = (container, icon, playerName, message) => {
  const containterHTML = container;

  containterHTML.innerHTML = `
    <section class="game-over">
        <h2 class="game-over__result">${playerName} wins the game!</h2>
        <img
          src=${icon}
          alt="Winner Icon"
          class="game-over__icon"
        />
        <p class="game-over__message">${message}</p>
        <button id="resetGame" class="btn">Play Again</button>

        <p class="game-over__link">
          <a
            target="__blank"
            href="https://github.com/JorgeAMendoza/TheOdinProject_Projects/tree/master/battleship"
            >See Code on GitHub</a
          >
        </p>
      </section>
    </main>
  `;
};

export default writeEndScreen;
