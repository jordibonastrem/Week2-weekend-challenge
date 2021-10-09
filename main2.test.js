const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const resolution = 10;
canvas.width = 800;
canvas.height = 800;

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;

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
      ctx.rect(col * resolution, row * resolution, resolution, resolution);
      ctx.fillStyle = getCellColor(grid[col][row]);

      ctx.fill();
    }
  }
}
