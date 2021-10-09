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
    newGrid.forEach((row,rowIndex)=>newGrid[rowIndex] = [...row] );
    for (let column = 0; column < grid.length; column++) {
      for (let row = 0; row < grid[column].length; row++) {
        const cell = grid[column][row];
        let numNeighbours = 0;
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


  }

  paintGrid(){

  }


}