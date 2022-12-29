function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let boxes = Math.floor(Math.log2(N))+1
//console.log(N)
    console.log(boxes)

     }
     
    if (process.env.USERNAME === "srini") {
      runProgram(`6`);
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