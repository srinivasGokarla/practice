function rotateBy90(R, matrix){
    for(let i = 0; i < (R/2); i++) {
        for(let j = i; j < R-i-1; j++) {
          let temp = matrix[i][j];
               matrix[i][j] = matrix[j][R-i-1];
            matrix[j][R-i-1] = matrix[R-i-1][R-j-1];
            matrix[R-i-1][R-j-1] = matrix[R-j-1][i];
            matrix[R-j-1][i] = temp; 
            
        }
        
         
      }
      for(let k = 0; k < matrix.length; k++) {
        console.log(matrix[k].join(" "));
        }
  
}
