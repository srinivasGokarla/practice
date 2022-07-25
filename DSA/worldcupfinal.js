function runProgram(input) {
    var input = input.trim().split("\n");
    var[NzScore, NzSuperOver, NzFours] = input[0].trim().split(" ").map(Number);
    var[EngScore, EngSuperOver, EngFours] = input[1].trim().split(" ").map(Number);
     if(NzScore > EngScore) {
         console.log("New Zealand")
     } else if(NzScore < EngScore) {
         console.log("England")
     } else if(NzSuperOver > EngSuperOver) {
        console.log("New Zealand")
     } else if(NzSuperOver < EngSuperOver) { 
        console.log("England")
     } else if(NzFours > EngFours) {
        console.log("New Zealand")
     } else if(NzFours < EngFours) {
        console.log("England")
     }
    }
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`241 15 21
      241 15 26`);
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