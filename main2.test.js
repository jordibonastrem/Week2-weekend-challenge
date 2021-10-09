const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const cellSize = 10;
canvas.width = 800;
canvas.height = 800;

const COLS = canvas.width / cellSize;
const ROWS = canvas.height / cellSize;

function getCellColor(cell) {
  if (cell === 1) {
    return "white";
  } else {
    return "black";
  }
}

function buildGrid() {
  return new Array(COLS)
    .fill(null)
    .map(() =>
      new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2))
    );
}
const grid = buildGrid();
render(grid);

function render(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      ctx.beginPath();
      ctx.rect(col * cellSize, row * cellSize, cellSize, cellSize);
      ctx.fillStyle = getCellColor(grid[col][row]);

      ctx.fill();
    }
  }
}

function checkLiveNeightbours() {

  neigSurvived = 0;

  if (matrix[i - 1][j - 1] === 1) {
    neigSurvived++;
  }
  if (matrix[i - 1][j] === 1) {
    neigSurvived++;
  }
  if (matrix[i - 1][j + 1] === 1) {
    neigSurvived++;
  }

  //--- middle row
  if (matrix[i][j - 1] === 1) {
    neigSurvived++;
  }
  if (matrix[i][j + 1] === 1) {
    neigSurvived++;
  }

  //---- bot row
  if (matrix[i + 2][j - 1] === 1) {
    neigSurvived++;
  }
  if (matrix[i + 2][j] === 1) {
    neigSurvived++;
  }
  if (matrix[i + 2][j + 2] === 1) {
    neigSurvived++;
  }

  return neigSurvived;
}