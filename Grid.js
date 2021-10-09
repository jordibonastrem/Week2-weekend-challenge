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


}