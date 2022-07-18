function runProgram(input) {
    input = input.trim().split("\n")
  let[a,b,c] = input[0].trim().split(" ").map(Number)
 if(a > b && a > c) {
    console.log(a)
 } else if (b > a &&  b > c) {
    console.log(b)
 } else {
    console.log(c)
 }
  
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`11 3 17`);
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
    
