const gameBoardModule = (function (doc) {
  const _domElements = {
    gameBoard: doc.querySelector(".game-board"),
    gameTiles: doc.querySelectorAll(".game-tile"),
    clearBoardButton: doc.querySelector("#clearBoard"),
    gameStatus: doc.querySelector(".game-status"),
  };

  let _turnCount;

  function _clearBoard() {
    _domElements.gameTiles.forEach((tile) => {
      tile.textContent = "";
    });
    _domElements.gameStatus.textContent = "";
    _domElements.clearBoardButton.disabled = true;
    _domElements.clearBoardButton.classList.add("disabled");
    _domElements.gameTiles.forEach((tiles) => {
      tiles.addEventListener("click", _setMark);
      tiles.classList.remove("x-mark");
      tiles.classList.remove("o-mark");
    });
  }

  function _setMark(e) {
    const playerMark = controllerModule.getCurrentPlayerMark();
    if (playerMark === "X") e.target.classList.add("x-mark");
    else e.target.classList.add("o-mark");
    e.target.textContent = playerMark;
    e.target.removeEventListener("click", _setMark);
    _turnCount++;
    _checkWinner(playerMark);
  }

  function _checkLine(line, mark) {
    if (
      line[0].textContent == mark &&
      line[1].textContent == mark &&
      line[2].textContent == mark
    )
      return true;
  }

  function _checkWinner(mark) {
    const playerMark = mark;
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
      _domElements.gameStatus.textContent = `${controllerModule.getCurrentPlayerName()} Wins this round!`;
      _turnCount = 0;
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
      _domElements.gameStatus.textContent = `${controllerModule.getCurrentPlayerName()} Wins this round!`;
      _turnCount = 0;
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
      _domElements.gameStatus.textContent = `${controllerModule.getCurrentPlayerName()} Wins this round!`;
      _turnCount = 0;
      _setWinner();
      return;
    }

    //Board is full
    if (_turnCount === 9) {
      _turnCount = 0;
      _tieGame();
    }
  }

  function _setWinner() {
    _domElements.gameTiles.forEach((tiles) =>
      tiles.removeEventListener("click", _setMark)
    );
    controllerModule.appendScore();

    _domElements.clearBoardButton.disabled = false;
    _domElements.clearBoardButton.classList.remove("disabled");
  }

  function _tieGame() {
    _domElements.gameStatus.textContent = "Tie Game! Play Again.";
    _domElements.clearBoardButton.disabled = false;
    _domElements.clearBoardButton.classList.remove("disabled");
  }

  function startGame() {
    _domElements.clearBoardButton.addEventListener("click", _clearBoard);
    _domElements.gameTiles.forEach((tile) =>
      tile.addEventListener("click", _setMark)
    );
    _turnCount = 0;
  }

  function endGame() {
    _domElements.gameTiles.forEach((tile) => {
      tile.removeEventListener("click", _setMark);
      tile.textContent = "";
      tile.classList.remove("x-mark");
      tile.classList.remove("o-mark");
    });
    _domElements.clearBoardButton.removeEventListener("click", _clearBoard);
    _domElements.clearBoardButton.classList.add("disabled");
  }

  return { startGame, endGame };
})(document);

const controllerModule = (function (doc) {
  const _domElements = {
    playerOneNameInput: doc.querySelector("#playerOneNameInput"),
    playerTwoNameInput: doc.querySelector("#playerTwoNameInput"),
    playerOneName: doc.querySelector("#playerOneName"),
    playerTwoName: doc.querySelector("#playerTwoName"),
    playerOneWins: doc.querySelector("#playerOneWins"),
    playerTwoWins: doc.querySelector("#playerTwoWins"),
    playerOneSymbol: doc.querySelector("#playerOneSymbol"),
    playerTwoSymbol: doc.querySelector("#playerTwoSymbol"),
    startGameButton: doc.querySelector("#startGame"),
    newGameButton: doc.querySelector("#newGame"),
    gameMessage: doc.querySelector(".game-message"),
  };

  let _playerOne;
  let _playerTwo;
  let _playerTurn = true;

  //player factory function
  function _player(mark, name) {
    const _info = {
      name: name,
      mark: mark,
      score: 0,
    };

    function getName() {
      return _info.name;
    }
    function getMark() {
      return _info.mark;
    }
    function getScore() {
      return _info.score;
    }
    function addScore() {
      _info.score++;
    }

    return { getName, getMark, getScore, addScore };
  }

  function _changeTurn() {
    _playerTurn = !_playerTurn;
    if (_playerTurn) {
      playerOneSymbol.classList.add("underline");
      playerTwoSymbol.classList.remove("underline");
    } else {
      playerTwoSymbol.classList.add("underline");
      playerOneSymbol.classList.remove("underline");
    }
  }

  function _startGame() {
    let playerOneNameInput = _domElements.playerOneNameInput.value;
    let playerTwoNameInput = _domElements.playerTwoNameInput.value;

    if (playerOneNameInput === "" || playerTwoNameInput === "") {
      _domElements.gameMessage.textContent = "Please Enter Two Names";
      return;
    }

    _playerTurn = true;
    _playerOne = _player("X", playerOneNameInput);
    _playerTwo = _player("O", playerTwoNameInput);

    _domElements.startGameButton.disabled = true;
    _domElements.newGameButton.disabled = false;
    _domElements.startGameButton.classList.add("disabled");
    _domElements.newGameButton.classList.remove("disabled");

    _domElements.playerOneSymbol.classList.add("underline");
    _domElements.gameMessage.textContent = "";
    _domElements.playerOneNameInput.classList.add("hidden");
    _domElements.playerTwoNameInput.classList.add("hidden");

    _domElements.playerOneName.textContent = playerOneNameInput;
    _domElements.playerTwoName.textContent = playerTwoNameInput;
    gameBoardModule.startGame();
  }

  function _newGame() {
    gameBoardModule.endGame();

    _domElements.playerOneWins.textContent = "0";
    _domElements.playerTwoWins.textContent = "0";

    _domElements.startGameButton.disabled = false;
    _domElements.startGameButton.classList.remove("disabled");

    _domElements.playerOneSymbol.classList.remove("underline");
    _domElements.playerTwoSymbol.classList.remove("underline");

    _domElements.playerOneNameInput.value = "";
    _domElements.playerTwoNameInput.value = "";
    _domElements.playerOneName.textContent = "";
    _domElements.playerTwoName.textContent = "";
    _domElements.playerOneNameInput.classList.remove("hidden");
    _domElements.playerTwoNameInput.classList.remove("hidden");

    _domElements.newGameButton.classList.add("disabled");
    _domElements.gameMessage.textContent = "Enter two names to play again!";
  }

  function _startController() {
    _domElements.startGameButton.addEventListener("click", _startGame);
    _domElements.newGameButton.addEventListener("click", _newGame);
    _domElements.newGameButton.disabled = true;
  }

  function appendScore() {
    if (!_playerTurn) {
      _playerOne.addScore();
      _domElements.playerOneWins.textContent = _playerOne.getScore();
    } else {
      _playerTwo.addScore();
      _domElements.playerTwoWins.textContent = _playerTwo.getScore();
    }
  }

  function getCurrentPlayerMark() {
    if (_playerTurn) {
      _changeTurn();
      return _playerOne.getMark();
    } else {
      _changeTurn();
      return _playerTwo.getMark();
    }
  }

  function getCurrentPlayerName() {
    if (!_playerTurn) return _playerOne.getName();
    else return _playerTwo.getName();
  }

  //Call intializer
  _startController();

  return {
    getCurrentPlayerMark,
    getCurrentPlayerName,
    appendScore,
  };
})(document);
