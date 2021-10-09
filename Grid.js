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
    return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
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


  }

  paintGrid(){

  }


}