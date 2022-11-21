function spirallyTraversingAMatrix(N, matrix){
    //write code here
    let mat = []
      let count = 0;
      let size = N*N;
       let left = 0,top= 0,right = N-1, bottom = N-1;
      while (count < size) {
          for(var cl = left; cl <= right; cl++) {
            
              mat.push(matrix[top][cl]);
              count++;
          }
          top++;
          for(var r = top; r <= bottom; r++) {
           
              mat.push(matrix[r][right]);
              count++;
          }
          right--;
          for(var cl = right; cl >= left; cl--) {
            
            mat.push(matrix[bottom][cl]);
            count++;
          }
          bottom--;
          for(var r = bottom; r >= top; r--) {
             
              mat.push(matrix[r][left])
              count++;
          }
          left++;
          
      }
      console.log(mat.join(" "))
  
    
}
