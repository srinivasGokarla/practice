function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1
    for(let i = 0; i < test; i++) {
  let [N,R] = input[line++].trim().split(" ").map(Number)
  let one = (1+ (N-1)*R)
  let two = R^(N-1)
  console.log(one,two)
    }
}
 
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      4 2`);
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
    
