function runProgram(input) {
    input = input.trim().split("\n")
  let s = input[0].trim().split(" ")
  console.log(camelcase(s))
    }
    function camelcase(s) {
        let count = 1;
      for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
          count++;
        }
      }
      return count;
    
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`SOSSOT`);
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