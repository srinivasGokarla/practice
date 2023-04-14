function runProgram(input) {
    input = input.trim().split("\n")
    let t = Number(input[0])
    let line = 1;
    for(let i= 0; i < t; i++) {
        let n = Number(input[line++])
        console.log(gameOfStone(n));
    }
  }
  function gameOfStone(n) {
    if (n % 7 == 0 || n % 7 == 1) {
        return "Second";
    }
        return "First";
}
  if (process.env.USERNAME === "srini") {
    runProgram(`8
    1
    2
    3
    4
    5
    6
    7
    10`);
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