function runProgram(input) {
    input = input.trim().split("\n")
  
    let[n,m] = input[0].trim().split(" ").map(Number)
     let mat = []
     let line = 1
    for(let j = 0; j < n; j++){
        
         mat.push(input[line++].trim().split(" ").map(Number))
        } 
      
  //  console.log(mat)
  conditionalmatrixsum(mat, n,m)
 
  }
  function conditionalmatrixsum(mat, n,m) {
    let sum = 0
   
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(mat[i][j] % 3 === 0) {
                sum = sum + mat[i][j]
                console.log(mat[i][j])
            }
        }
    }
console.log(sum)
  }

      if (process.env.USERNAME === "srini") {
        runProgram(`6 7
        11 67 21 90 77 3 9
        3 3 3 3 3 3 3
        2 2 2 2 2 2 2
        41 21 9 7 5 7 0
        3 3 3 3 3 3 3
        2 2 2 2 2 2 2`);
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