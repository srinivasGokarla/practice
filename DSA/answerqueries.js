function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)
let q = Number(input[2])
let queris = input[3].trim().split(" ").map(Number)
//console.log(arr,N,q,queris)



  }

      if (process.env.USERNAME === "srini") {
        runProgram(`5
        1 2 3 4 5
        3
        3 5 7`);
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