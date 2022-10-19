function runProgram(input) {
    input = input.trim().split("\n")
  
    let n = Number(input[0])
     let mat = []
     let line = 1
    for(let j = 0; j < n; j++){
        
         mat.push(input[line++].trim().split(" ").map(Number))
        } 
 
flip_matrix(mat)
 
  }

function flip_matrix(mat) {

    for(let i = 0; i < mat.length; i++) { 
             let left = 0;
             let right = mat[i].length-1;
              
             while( left <= right ) {
                
                 if(mat[i][left] == mat[i][right]) {
                     
                     mat[i][left] = 1-mat[i][left];
                     mat[i][right] = mat[i][left];
                 }

                 left++;
                 right--;
             }
         }
       for(var k = 0; k < mat.length; k++) {
        console.log(mat[k].join(" "));
        }
}
 

      if (process.env.USERNAME === "srini") {
        runProgram(`3 
        1 1 0
        1 0 1
        0 0 0 `);
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