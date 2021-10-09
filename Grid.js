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

  applyLogic(){
    //create new grrid
    const newGrid = [...this.grid]
    newGrid.forEach((row,rowIndex)=>newGrid[rowIndex] = [...row] );

    //check neighbours
    for (let column = 0; column < this.grid.length; column++) {
      for (let row = 0; row < this.grid[column].length; row++) {
        const cell = this.grid[column][row];
        let neigSurvived = 0;
        
        //top row
        if(this.grid[column-1!==undefined]){
          if (this.grid[column - 1][row - 1] === 1) {
            neigSurvived++;
          }
          if (this.grid[column - 1][row] === 1) {
            neigSurvived++;
          }
          if (this.grid[column - 1][row + 1] === 1) {
            neigSurvived++;
          }
        }

        //--- middle row
        if (this.grid[column][row - 1] === 1) {
          neigSurvived++;
        }
        if (this.grid[column][row + 1] === 1) {
          neigSurvived++;
        }
      
        //---- bot row
        // if(this.grid[column+1]!==undefined){
        //   if (this.grid[column + 2][row - 1] === 1) {
        //     neigSurvived++;
        //   }
        //   if (this.grid[column + 2][row] === 1) {
        //     neigSurvived++;
        //   }
        //   if (this.grid[column + 2][row + 2] === 1) {
        //     neigSurvived++;
        //   }
        // }

        //apply rules
        if(this.grid[column][row]===1 && neigSurvived<2){
          newGrid[column][row] = 0;
        }else if (this.grid[column][row]===1 && neigSurvived >3){
          newGrid[column][row] = 0;
        }else if (this.grid[column][row] === 0 && neigSurvived===3){
          newGrid[column][row] = 0;
        }
      }
    }
    this.grid = newGrid;
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

for( i =0;i<5;i++){

  g.applyLogic();
  g.paintGrid();
  
}


