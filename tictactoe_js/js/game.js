const gameBoardModule = (function (doc) {
  const _domElements = {
    gameBoard: doc.querySelector(".game-board"),
    gameTiles: doc.querySelectorAll(".game-tile"),
    clearGameButton: doc.querySelector("#clearBoard"),
    gameStatus: doc.querySelector(".game-status"),
  };
  let _turnCount = 0;

  function _clearBoard(e) {
    _domElements.gameTiles.forEach((tile) => {
      tile.textContent = "";
    });
    _domElements.gameStatus.textContent = "";
    _domElements.gameTiles.forEach((tiles) =>
      tiles.addEventListener("click", _setMark)
    );
    _domElements.clearGameButton.disabled = true;
  }

  function _setMark(e) {
    const playerMark = "X";
    e.target.textContent = playerMark;
    e.target.removeEventListener("click", _setMark);
    _turnCount++;
    _checkWinner();
  }

  function _checkLine(line, mark) {
    if (
      line[0].textContent == mark &&
      line[1].textContent == mark &&
      line[2].textContent == mark
    )
      return true;
  }

  function _checkWinner() {
    console.log(_turnCount);
    const playerMark = "X";
    const boardTiles = [..._domElements.gameTiles];

    //Set Rows to check
    const firstRow = [boardTiles[0], boardTiles[1], boardTiles[2]];
    const secondRow = [boardTiles[3], boardTiles[4], boardTiles[5]];
    const thirdRow = [boardTiles[6], boardTiles[7], boardTiles[8]];

    if (
      _checkLine(firstRow, playerMark) ||
      _checkLine(secondRow, playerMark) ||
      _checkLine(thirdRow, playerMark)
    ) {
      _setWinner();
      return;
    }

    //set Columns to check
    const firstColumn = [boardTiles[0], boardTiles[3], boardTiles[6]];
    const secondColumn = [boardTiles[1], boardTiles[4], boardTiles[7]];
    const thirdColumn = [boardTiles[2], boardTiles[5], boardTiles[8]];

    if (
      _checkLine(firstColumn, playerMark) ||
      _checkLine(secondColumn, playerMark) ||
      _checkLine(thirdColumn, playerMark)
    ) {
      _setWinner();
      return;
    }

    //check diagnols
    const firstDiagnol = [boardTiles[0], boardTiles[4], boardTiles[8]];
    const secondDiagnol = [boardTiles[6], boardTiles[4], boardTiles[2]];

    if (
      _checkLine(firstDiagnol, playerMark) ||
      _checkLine(secondDiagnol, playerMark)
    ) {
      _setWinner();
      return;
    }

    if (_turnCount === 9) _tieGame();
  }

  function _setWinner() {
    _domElements.gameTiles.forEach((tiles) =>
      tiles.removeEventListener("click", _setMark)
    );
    window.alert("HELLO");
    //(maybe) put line through winner row.
    //call function to notify container to add score
    _domElements.clearGameButton.disabled = false;
  }

  function _tieGame() {
    _domElements.gameStatus.textContent = "Tie Game! Play Again.";
    _domElements.clearGameButton.disabled = false;
  }

  function _setEvents() {
    _domElements.clearGameButton.addEventListener("click", _clearBoard);
    _domElements.gameTiles.forEach((tile) =>
      tile.addEventListener("click", _setMark)
    );
  }

  _setEvents();
})(document);

const controllerModule = (function (doc) {})();
