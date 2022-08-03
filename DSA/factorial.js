function runProgram(input) {
input = input.trim().split("\n")
let N = Number(input[0])
console.log(Factorial(N))
    }
    function Factorial(N) {
        if(N == 1) 
            return 1
        if(N == 0)
        return 0
        else 
        return (Factorial(N-1) * N)
    }


    if (process.env.USERNAME === "srini") {
      runProgram(`5`);
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
    
