function runProgram(input) {
    input = input.trim().split("\n")
     let test = Number(input[0]);
     let line = 1
     for(let i = 0; i < test; i++) {
    let[n,m] = input[line++].trim().split(" ").map(Number)
     let mat = []
   
    for(let j = 0; j < n; j++){
        
         mat.push(input[line++].trim().split(" ").map(Number))
        } 
 

      //  console.log(mat,test,n,m)
      masaiCompution(mat,n,m)
  }
 
}
function masaiCompution(mat,n,m) {
   let arr = []
for(let k = 0; k < n; k++) {
    var max = 0
for(let l = 0; l < m; l++) {
if(max < mat[k][l]) {
    max = mat[k][l]
}
}
arr.push(max)

}
console.log(arr.join(" "))
}


      if (process.env.USERNAME === "srini") {
        runProgram(`2
        3 4
        1 2 3 4
        5 6 7 8
        9 10 11 12
        3 3
        7 7 1
        4 3 10
        1 2 3`);
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