function getCellColor(cell) {
  if (cell === 1) {
    return "white";
  } else {
    return "black";
  }
}

function buildGrid(cols,rows) {
  return new Array(cols)
    .fill(null)
    .map(() =>
      new Array(rows).fill(null).map(() => Math.floor(Math.random() * 2))
    );
}

function paintGrid(grid,ctx,cellSize) {
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

function checkLiveNeightbours(grid) {
  neigSurvived = 0;
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      if (grid[i - 1][j - 1] === 1) {
        neigSurvived++;
      }
      if (grid[i - 1][j] === 1) {
        neigSurvived++;
      }
      if (grid[i - 1][j + 1] === 1) {
        neigSurvived++;
      }
    
      //--- middle row
      if (grid[i][j - 1] === 1) {
        neigSurvived++;
      }
      if (grid[i][j + 1] === 1) {
        neigSurvived++;
      }
    
      //---- bot row
      if (grid[i + 2][j - 1] === 1) {
        neigSurvived++;
      }
      if (grid[i + 2][j] === 1) {
        neigSurvived++;
      }
      if (grid[i + 2][j + 2] === 1) {
        neigSurvived++;
      }

    }

  }
  
  return neigSurvived;
}

function applyLogic(grid){
  const newGrid = [...grid]
  newGrid.forEach((row,rowIndex)=>newGrid[rowIndex] = [...row] );

  

}

function mainLoop(){
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const cellSize = 10;
  canvas.width = 800;
  canvas.height = 800;

  const COLS = canvas.width / cellSize;
  const ROWS = canvas.height / cellSize;
  const grid = buildGrid(COLS,ROWS);

  paintGrid(grid,ctx,cellSize);
  applyLogic(grid);
}

mainLoop();