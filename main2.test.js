// function getCellColor(cell) {
//   if (cell === 1) {
//     return "white";
//   } else {
//     return "black";
//   }
// }

// function buildGrid(cols,rows) {
//   // return new Array(cols)
//   //   .fill(null)
//   //   .map(() =>
//   //     new Array(rows).fill(null).map(() => Math.floor(Math.random() * 2))
//   //   );
//     return new Array(cols)
//     .fill(null)
//     .map(() =>
//       new Array(rows).fill(null).map(() => 0)
//     );
// }

// function paintGrid(grid,ctx,cellSize) {
//   for (let col = 0; col < grid.length; col++) {
//     for (let row = 0; row < grid[col].length; row++) {
//       const cell = grid[col][row];

//       ctx.beginPath();
//       ctx.rect(col * cellSize, row * cellSize, cellSize, cellSize);
//       ctx.fillStyle = getCellColor(grid[col][row]);

//       ctx.fill();
//     }
//   }
// }

// function checkLiveNeightboursAndApplyRules(grid) {
//   neigSurvived = 0 ;
//   newGrid = 
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {

//       if(!isEdge(grid)){
//         if (grid[i - 1][j - 1] === 1) {
//           neigSurvived++;
//         }
//         if (grid[i - 1][j] === 1) {
//           neigSurvived++;
//         }
//         if (grid[i - 1][j + 1] === 1) {
//           neigSurvived++;
//         }
      
//         //--- middle row
//         if (grid[i][j - 1] === 1) {
//           neigSurvived++;
//         }
//         if (grid[i][j + 1] === 1) {
//           neigSurvived++;
//         }
      
//         //---- bot row
//         if (grid[i + 2][j - 1] === 1) {
//           neigSurvived++;
//         }
//         if (grid[i + 2][j] === 1) {
//           neigSurvived++;
//         }
//         if (grid[i + 2][j + 2] === 1) {
//           neigSurvived++;
//         }

//       }
      
//       if(grid[i][j]===1 && neigSurvived<2){
//         newGrid[i][j] = 0;
//       }else if (grid[i][j]===1 && neigSurvived >3){
//         newGrid[i][j] = 0;
//       }else if (grid[i][j] === 0 && neigSurvived===3){
//         newGrid[i][j] = 0;
//       }
//     }
//   }
//   return newGrid;
// }

// function isEdge(grid){
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if(i===0 || i===grid[i].length-1||j==0||j===grid.length-1){
//         return true;
//       }else{
//         return false;
//       }
//     }
//   }
// }

// function applyLogic(grid){
//   const newGrid = [...grid]
//   newGrid.forEach((row,rowIndex)=>newGrid[rowIndex] = [...row] );
//   newGrid = checkLiveNeightboursAndApplyRules(grid);
// }

// function mainLoop(){
//   const canvas = document.querySelector("canvas");
//   const ctx = canvas.getContext("2d");

//   const cellSize = 10;
//   canvas.width = 800;
//   canvas.height = 800;

//   const COLS = canvas.width / cellSize;
//   const ROWS = canvas.height / cellSize;
//   const grid = buildGrid(COLS,ROWS);
//   grid[50][50]=1;
//   grid[51][51]=1;
//   grid[52][51]=1;
//   grid[52][50]=1;

//   while(true){
//   paintGrid(grid,ctx,cellSize);
//   applyLogic(grid);
//   }

// }


// mainLoop();