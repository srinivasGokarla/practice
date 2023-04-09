function runProgram(input) {
    input = input.trim().split("\n")
let year = Number(input[0])
if (year == 1918)
        console.log("26.09.1918");
    else if (((year <= 1917) && (year%4 == 0)) || ((year%400 == 0) || ((year%4 ==0) & (year%100 != 0))))
        console.log("12.09." + year);
    else
        console.log("13.09." + year);
    }


    if (process.env.USERNAME === "srini") {
      runProgram(`2017`);
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
