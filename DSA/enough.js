function runProgram(input) {
    input = input.trim().split("\n")
  let[K,N] = input[0].trim().split(" ").map(Number)
   let fuel = K * N;
   if(fuel > 50 ) {

    console.log("Enough")
    } else {
        console.log("Go On")
    }
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`7`);
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
    
