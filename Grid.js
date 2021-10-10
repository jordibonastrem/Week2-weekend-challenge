class Grid{
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');

  constructor(width,height,resolution){
    canvas.width = width;
    canvas.height = height;

    this.resolution = resolution;
    this.columns = width / resolution;
    this.rows = height / resolution;
  }

  generateGrid(){
    // this.grid = new Array(this.columns).fill(null)
    // .map(() => new Array(this.rows).fill(null)
    //   .map(() => Math.floor(Math.random() * 2)));
       let grid =  new Array(this.columns).fill(null)
      .map(() => new Array(this.rows).fill(null)
        .map(() => 0));
    
    grid[5][5] =1;
    grid[50][51] =1;
    grid[50][52] =1;

    return grid;
  }
  getCellColor(cell) {
    if (cell === 1) {
      return "white";
    } else {
      return "black";
    }
  }

  applyLogic(grid){
    //create new grrid
    const newGrid = [...grid]
    newGrid.forEach((row,rowIndex)=>newGrid[rowIndex] = [...row] );

    //check neighbours
    for (let column = 0; column <grid.length; column++) {
      for (let row = 0; row < grid[column].length; row++) {
        const cell = grid[column][row];
        let neigSurvived = 0;
        
        //top row
        if(grid[column-1!==undefined]){
          if (grid[column - 1][row] === 1) {
            neigSurvived++;
          }
          if (grid[column - 1][row - 1] === 1) {
            neigSurvived++;
          }
          if (grid[column - 1][row + 1] === 1) {
            neigSurvived++;
          }


        //--- middle row
        if (grid[column][row - 1] === 1) {
          neigSurvived++;
        }
        if (grid[column][row + 1] === 1) {
          neigSurvived++;
        }
      
        //---- bot row
        if(grid[column+1]!==undefined){
          if (grid[column + 1][row] === 1) {
            neigSurvived++;
          }
          if (grid[column + 1][row -1] === 1) {
            neigSurvived++;
          }
          if (grid[column + 1][row + 1] === 1) {
            neigSurvived++;
          }
        }

        //apply rules
        if(grid[column][row]===1 && neigSurvived<2){
          newGrid[column][row] = 0;
        }else if (grid[column][row]===1 && neigSurvived >3){
          newGrid[column][row] = 0;
        }else if (grid[column][row] === 0 && neigSurvived===3){
          newGrid[column][row] = 0;
        }
      }
    }
    return newGrid;
  }

  paintGrid(grid){
    for (let column = 0; column < grid.length; column++) {
      for (let row = 0; row <grid[column].length; row++) {
        const cell = grid[column][row];
  
        this.ctx.beginPath();
        this.ctx.rect(column *this.resolution, row * this.resolution,this.resolution, this.resolution);
        this.ctx.fillStyle = this.getCellColor(grid[column][row]);
 
        this.ctx.fill();
      }
    }
  }

}





// g = new Grid(800,800,10);
// grid = g.generateGrid();
// g.paintGrid(grid);

// function mainLoop(){
  
//   g.applyLogic();
//   g.paintGrid();

// }
// // g.applyLogic();
// g.paintGrid();

// for( i =0;i<2;i++){

//   g.applyLogic();
//   g.paintGrid();
  
// }


function juego(tablero, count) {
  const tableroNuevo = Array(dimensionesTablero)
    .fill(0)
    .map(() => Array(dimensionesTablero).fill(0));

  if (count === 0) {
    return;
  }

  for (let x = 0; x < tablero.length; x++) {
    for (let y = 0; y < tablero[x].length; y++) {
      let contador = 0;
      if (tablero[x - 1] !== undefined) {
        if (tablero[x - 1][y] === 1) contador++;
        if (tablero[x - 1][y - 1] === 1) contador++;
        if (tablero[x - 1][y + 1] === 1) contador++;
      }
      if (tablero[x][y - 1] === 1) contador++;
      if (tablero[x][y + 1] === 1) contador++;
      if (tablero[x + 1] !== undefined) {
        if (tablero[x + 1][y] === 1) contador++;
        if (tablero[x + 1][y - 1] === 1) contador++;
        if (tablero[x + 1][y + 1] === 1) contador++;
      }

      tableroNuevo[x][y] = creandoTablero(tablero[x][y], contador);
    }
  }
  console.log(tableroNuevo);
  juego(tableroNuevo, count - 1);
  // return creadorTablero;
}
function creandoTablero(vivos, vecinos) {
  if (vivos === 1) {
    if (vecinos < 2) {
      return 0;
    }
    if (vecinos > 3) {
      return 0;
    }
    if (vecinos === 2 || vecinos === 3) {
      return 1;
    }
  }
  if (vivos === 0) {
    if (vecinos === 3) {
      return 1;
    }
  }
  return 0;
}
