function runProgram(input) {
    input = input.trim().split("\n")
    let[n,m] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
 console.log(arr)
}
        
        if (process.env.USERNAME === "srini") {
          runProgram(`5 3
          1 2 2 1 3`);
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
        
    