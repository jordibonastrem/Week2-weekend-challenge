// function isCellAliveOrDead(cell) {
//   return cell === 1;
// }
// function checkLiveNeightbours(matrix, i, j) {
//   console.log(matrix[i][j]);
//   // neigSurvived = 0;

//   // if (matrix[i - 1][j - 1] === 1) {
//   //   neigSurvived++;
//   // }
//   // if (matrix[i - 1][j] === 1) {
//   //   neigSurvived++;
//   // }
//   // if (matrix[i - 1][j + 1] === 1) {
//   //   neigSurvived++;
//   // }

//   // //--- middle row
//   // if (matrix[i][j - 1] === 1) {
//   //   neigSurvived++;
//   // }
//   // if (matrix[i][j + 1] === 1) {
//   //   neigSurvived++;
//   // }

//   // //---- bot row
//   // if (matrix[i + 2][j - 1] === 1) {
//   //   neigSurvived++;
//   // }
//   // if (matrix[i + 2][j] === 1) {
//   //   neigSurvived++;
//   // }
//   // if (matrix[i + 2][j + 2] === 1) {
//   //   neigSurvived++;
//   // }

//   // return neigSurvived;
// }
// function paintMatrix(matrix) {
//   console.table(matrix);
// }
// function sleep(seconds) {
//   var e = new Date().getTime() + seconds * 1000;
//   while (new Date().getTime() <= e) {}
// }
// function checkIfKeepLiving(numOfLiveNeig) {
//   if (numOfLiveNeig === 2 || numOfLiveNeig === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function checkIfRessusitate(numOfLiveNeig) {
//   if (numOfLiveNeig === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function doLogic(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       // console.table(matrix);
//       numOfLiveNeig = checkLiveNeightbours(matrix, i, j);
//       // console.table(matrix);
//       // if (isCellAliveOrDead(matrix[i][j])) {
//       //   if (checkIfKeepLiving(numOfLiveNeig)) {
//       //     matrix[i][j] = 1;
//       //   } else {
//       //     matrix[i][j] = 0;
//       //   }
//       // } else {
//       //   if (checkIfRessusitate(numOfLiveNeig)) {
//       //     matrix[i][j] = 1;
//       //   } else {
//       //     matrix[i][j] = 0;
//       //   }
//       // }
//     }
//   }
// }

// // function mainLoop() {
// //   columns = 5;
// //   rows = 5;
// //   const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
// //   matrix[1][1] = 1;

// //   //  paintMatrix(matrix);
// //   doLogic(matrix);
// // }

// columns = 5;
// rows = 5;
// const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
// matrix[1][1] = 1;

// doLogic(matrix);
