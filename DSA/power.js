function runProgram(input) {
    input = input.trim().split("\n")
 let[a,b] = input[0].trim().split(" ").map(Number)
 let x = Math.pow(10^a,10^b);
 console.log(4900 * (10^9+7))
 console.log(x)
    
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`10 20`);
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
    
