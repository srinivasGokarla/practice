function runProgram(input) {
    input = input.trim().split("\n")
    let testcases =  Number(input[0])
    let line = 1;
    for(let m = 0; m < testcases; m++) {
    let n = Number(input[line++].trim().split(" ").map(Number));
    let mat = [];
   for(let l = 0; l < n; l++){
       
        mat.push(input[line++].trim().split(" ").map(Number))
        
}

    for(let i = 0; i < (n/2); i++) {
        for(let j = i; j < n-i-1; j++) {
          let temp = mat[i][j];
            mat[i][j] = mat[n-j-1][i];
            mat[n-j-1][i] = mat[n-i-1][n-j-1];
            mat[n-i-1][n-j-1] = mat[j][n-i-1];
            mat[j][n-i-1] = temp;
            
        }
        
         
      }
      for(let k = 0; k < mat.length; k++) {
        console.log(mat[k].join(" "));
        }
}
}

if (process.env.USERNAME === "srini") {
  runProgram(`2
  4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8
  3
  1 2 3
  4 5 6
  7 8 9`);
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