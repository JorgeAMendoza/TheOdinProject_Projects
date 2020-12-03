//Grid Module
const gridCanvas = ((doc) => {
  //Boolean Flag to draw on canvas or not
  let _draw = false;

  function _createGrid(canvasDimen = 16) {
    const canvas = doc.querySelector(".canvas");
    canvas.innerHTML = "";
    const canvasSize = canvasDimen * canvasDimen;

    for (let i = 0; i < canvasSize; i++) {
      canvas.innerHTML += `<div class="cell"><div>`;
    }

    canvas.style.gridTemplateColumns = `repeat(${canvasDimen}, 1fr)`;

    // Set event listners for newwly inserted cells
    const canvasCells = doc.querySelectorAll(".cell");
    canvasCells.forEach((cell) =>
      cell.addEventListener("mouseover", _drawOnCanvas)
    );
  }

  function _drawOnCanvas(e) {
    if (!_draw) return; //Return if module flag is false
    //get color from brush module and apply to canvas cell.
  }

  function _clearCanvas() {
    const canvasCells = document.querySelectorAll(".cell");
    canvasCells.forEach((cell) => (cell.style.backgroundColor = "white"));
  }

  function _setListeners() {
    const canvas = doc.querySelector(".canvas");
    const clearGridButton = doc.querySelector("#clear-grid");
    const createGridButton = doc.querySelector("#create-grid");
    //Set up event Listeners
    clearGridButton.addEventListener("click", _clearCanvas);
    createGridButton.addEventListener("click", () => {
      const gridSize = document.querySelector("#grid-size");
      if (gridSize.value > 0 && gridSize.value <= 20)
        _createGrid(gridSize.value);
    });
    canvas.addEventListener("mousedown", () => (_draw = true));
    canvas.addEventListener("mouseup", () => (_draw = false));
    canvas.addEventListener("mouseleave", () => (_draw = false));
  }

  //Call Starter Functions
  _createGrid();
  _setListeners();
})(document);
