class Grid{
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');

  constructor(width,height,resolution){
    this.width = width;
    this.height = height;
    this.resolution = resolution;
    this.columns = canvas.width / resolution;
    this.rows = canvas.height / resolution;
  }

  generateGrid(){
    this.grid = new Array(this.columns).fill(null)
    .map(() => new Array(this.rows).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
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
    for (let column = 0; column < grid.length; column++) {
      for (let row = 0; row < grid[column].length; row++) {
        const cell = grid[column][row];
        let numNeighbours = 0;
        
        //top row
        if(grid[column-1!==undefined]){
          if (grid[column - 1][row - 1] === 1) {
            neigSurvived++;
          }
          if (grid[column - 1][row] === 1) {
            neigSurvived++;
          }
          if (grid[column - 1][row + 1] === 1) {
            neigSurvived++;
          }
        }

        //--- middle row
        if (grid[column][row - 1] === 1) {
          neigSurvived++;
        }
        if (grid[column][j + 1] === 1) {
          neigSurvived++;
        }
      
        //---- bot row
        if(grid[column+1]!==undefined){
          if (grid[column + 2][row - 1] === 1) {
            neigSurvived++;
          }
          if (grid[column + 2][row] === 1) {
            neigSurvived++;
          }
          if (grid[column + 2][row + 2] === 1) {
            neigSurvived++;
          }
        }

        //apply rules
        if(grid[i][j]===1 && neigSurvived<2){
          newGrid[i][j] = 0;
        }else if (grid[i][j]===1 && neigSurvived >3){
          newGrid[i][j] = 0;
        }else if (grid[i][j] === 0 && neigSurvived===3){
          newGrid[i][j] = 0;
        }
      }
    }
    return newGrid;
  }

  paintGrid(){
    for (let column = 0; column < this.grid.length; column++) {
      for (let row = 0; row < this.grid[column].length; row++) {
        const cell = this.grid[column][row];
  
        this.ctx.beginPath();
        this.ctx.rect(column * this.resolution, row * this.resolution, this.resolution, this.resolution);
        this.ctx.fillStyle = this.getCellColor(this.grid[column][row]);
  
        this.ctx.fill();
      }
    }
  }



}

g = new Grid(800,800,10);
g.generateGrid();
g.paintGrid();