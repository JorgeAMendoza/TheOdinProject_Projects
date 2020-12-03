//Brush Module
const gridBrush = ((doc) => {
  let _randomColorFlag = false;
  let _brushColor = "#000";
  const _brushIcon = doc.querySelector("#brush");

  function _setEraser() {
    _randomColorFlag = false;
    _brushColor = "#fff";
    _brushIcon.style.color = _brushColor;
  }

  function _setRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    _brushColor = `rgb(${red}, ${green}, ${blue})`;
    _brushIcon.style.color = _brushColor;
  }

  function _setColorInput(e) {
    _randomColorFlag = false;
    _brushColor = e.target.value;
    _brushIcon.style.color = _brushColor;
  }

  function _setListeners() {
    const eraseButton = doc.querySelector("#eraseBrush");
    const randomButton = doc.querySelector("#randomBrush");
    const colorInputButton = doc.querySelector("#colorInput");

    //Set Event Listners
    eraseButton.addEventListener("click", () => {
      randomButton.classList.remove("btn-selected");
      eraseButton.classList.add("btn-selected");
      _setEraser();
    });
    randomButton.addEventListener("click", () => {
      eraseButton.classList.remove("btn-selected");
      randomButton.classList.add("btn-selected");
      _randomColorFlag = true;
    });
    colorInputButton.addEventListener("change", (e) => {
      eraseButton.classList.remove("btn-selected");
      randomButton.classList.remove("btn-selected");
      _setColorInput(e);
    });

    //set Beggining Icon Color
    _brushIcon.style.color = _brushColor;
  }

  function getColor() {
    if (_randomColorFlag) _setRandomColor();
    return _brushColor;
  }

  //Call Listner Funciton
  _setListeners();

  return {
    getColor: getColor,
  };
})(document);

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
    this.style.backgroundColor = gridBrush.getColor();
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
