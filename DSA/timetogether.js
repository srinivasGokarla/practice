function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let[mon,date] = input[line++].trim().split("-").map(Number)
        console.log(mon,test)
    }
  
    }
    if (process.env.USERNAME === "srini") {
        runProgram(`1
        08-15 08-18 08-16 08-19
        `);
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