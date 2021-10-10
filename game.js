const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 800;
const res = 10;

const columns = canvas.width / res;
const rows = canvas.height / res;

function buildGrid() {
  return new Array(columns).fill(null)
    .map(() => new Array(rows).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
}

let grid = buildGrid();


function nextGen(grid) {
  const nextGen = grid.map(arr => [...arr]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let numNeighbours = 0;
      
      
      if (grid[col - 1] !== undefined && grid[col - 1] !== undefined ) {
        if (grid[col - 1][row - 1] === 1) numNeighbours++;
        if (grid[col - 1][row + 1] === 1) numNeighbours++;
      }
 
      if (grid[col + 1] !== undefined && grid[col + 1] !== undefined) {
        if (grid[col + 1][row - 1] === 1) numNeighbours++;
        if (grid[col + 1][row + 1] === 1) numNeighbours++;
      }

      if (grid[col - 1] !== undefined && grid[col + 1] !== undefined) {
        if (grid[col - 1][row] === 1) numNeighbours++;
        if (grid[col + 1][row] === 1) numNeighbours++;
      }

      if (grid[col] !== undefined && grid[col] !== undefined) {
        if (grid[col][row - 1] === 1) numNeighbours++;
        if (grid[col][row + 1] === 1) numNeighbours++;
      }

      // rules
      if (cell === 1 && numNeighbours < 2) {
        nextGen[col][row] = 0;
      } else if (cell === 1 && numNeighbours > 3) {
        nextGen[col][row] = 0;
      } else if (cell === 0 && numNeighbours === 3) {
        nextGen[col][row] = 1;
      }
    }
  }
  return nextGen;
}

function render(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      canvasContext.beginPath();

      canvasContext.rect(col * res, row * res, res, res);
      if(cell ===1){
        canvasContext.fillStyle= 'white';
      }else{
        canvasContext.fillStyle= 'black';
      }

      canvasContext.fill();
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

requestAnimationFrame(update);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
   if ((new Date().getTime() - start) > milliseconds) {
    break;
   }
  }
 }
 
function update() {
  grid = nextGen(grid);
  render(grid);
  sleep(70)
  requestAnimationFrame(update);
}

