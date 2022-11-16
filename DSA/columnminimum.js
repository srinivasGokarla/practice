
  function runProgram(input) {
    input = input.split("\n");
    let[n,m] = input[0].trim().split(" ").map(Number)
    let line = 1;
    let mat = []
    for(let i = 0; i < n; i++) {
mat.push(input[line++].trim().split(" ").map(Number))

    }
    (smallestInCol(mat,n,m))
}
function smallestInCol(mat,n,m) {
    var arr = []
for(let k= 0; k < m; k++) {
    let minm = mat[0][k]
    for(let j = 1; j < n; j++) {
        if(mat[j][k] < minm) {
            minm = mat[j][k]
           
        }
       
      
    }
    
arr.push(minm)

}
console.log(arr.join(" "))
}
if (process.env.USERNAME === 'srini') {
  runProgram(`3 3
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