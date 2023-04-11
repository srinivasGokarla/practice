function runProgram(input) {
    input = input.trim().split("\n")
  let s = input[0].trim().split(" ")
  console.log(marsExploration(s))
    }
    function marsExploration(s) {
       let count = 0;
     for (let i = 0; i < s.length; i += 3) {
         if (s[i] !== 'S') {
           count++;
         }
         if (s[i + 1] !== 'O') {
           count++;
         }
         if (s[i + 2] !== 'S') {
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