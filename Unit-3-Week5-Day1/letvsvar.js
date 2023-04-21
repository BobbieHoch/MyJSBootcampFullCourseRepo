//lets use var to declare the i variable and then lets do a loop
function printMatrix (matrix) {
    for (var i = 0; i < matrix.length; i++) {
      var line = matrix[i];
      for (var i = 0; i < line.length; i++) {
        var element = line[i];
        console.log(element);
      }
    }
  }
  
  var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  //what do you expect to see?
   printMatrix(matrix);

   //uncomment below and comment the stuff up above to see the differnce
//   function printMatrix (matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//       const line = matrix[i];
//       for (let i = 0; i < line.length; i++) {
//         const element = line[i];
//         console.log(element);
//       }
//     }
//   }
  
//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   printMatrix(matrix);