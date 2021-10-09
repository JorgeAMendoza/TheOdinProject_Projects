const writeBoardPieces = () => {
  const boardPiecesMarkup = [];
  let xCord = 0;
  let yCord = 0;

  for (let i = 0; i < 100; i += 1) {
    const boardPiece = `<div class="placement-board__board-piece" data-coordinate='${xCord},${yCord}'></div>`;
    boardPiecesMarkup.push(boardPiece);
    yCord += 1;

    if (yCord === 10) {
      yCord = 0;
      xCord += 1;
    }
  }

  return boardPiecesMarkup.join('');
};

export default writeBoardPieces;
