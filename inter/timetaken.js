function runProgram(input) {
    input = input.trim().split("\n")
let[N,K] = input[0].trim().split(" ").map(Number)
let arr = input[1].trim().split(" ").map(Number)
//console.log(N,K,arr)
console.log(K)

}





   
    if (process.env.USERNAME === "srini") {
      runProgram(`4 1
      5 1 1 1`);
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
      process.on("SIGlet", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }
    
