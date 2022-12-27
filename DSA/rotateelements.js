function runProgram(input) {
    input = input.trim().split("\n")
   //console.log(input)
   let n = Number(input[0])
   //console.log(n)
   let line = 1;
   let mat = [];
   for(var i = 0; i < n; i++) {
       mat.push(input[line++].trim().split(" ").map(Number))
   
   }
      let top = 0,left = 0, right = n -1,bottom = n - 1;
    let mat1 = [];
     count = 0;
    let size = n*n;
     while (count < size) {
       for(var i = 0; i < (Math.floor(n/2)); i++) {
           prev = mat[top+1][left]
           mat1.push(prev)
           for(let j = left; j <= right && count <= size; j++) {
               temp = mat[top][j];
               mat[top][j] = prev;
               prev = temp; 
               count++; 
               mat1.push(prev)
              
           }
           top++;
          
           for(let j = top; j <= bottom && count <= size; j++) {
               temp = mat[j][right];
               mat[j][right] = prev;
               prev = temp;
               count++; 
               mat1.push(prev)
           }
           right--;
           for(let j = right; j >= left && count <= size; j--) {
               temp = mat[bottom][j];
               mat[bottom][j] = prev;
               prev = temp;
               count++; 
               mat1.push(prev)
           }
           bottom--;
           for(let j = bottom; j >= top && count < size; j--) {
               temp = mat[j][left];
               mat[j][left] = prev;
               prev = temp;
               count++; 
               mat1.push(prev)
           }
           left++;
         } 
        
         }
          
         for(let k = 0; k < mat.length; k++) {
           console.log(mat[k].join(" "));
       }
      
   }
   
   
   if (process.env.USERNAME === "srini") {
     runProgram(`4
     1 2 3 4
     1 2 3 4
     1 2 3 4
     1 2 3 4`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }