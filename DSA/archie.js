function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)
let max = arr[0]
for(let i= 0; i < N;i++) {
    if(max <= arr[i]) {
       max = arr[i]
    }
}
console.log(max)
 }
 
   
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5
      7 3 1 2 3`);
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
    
