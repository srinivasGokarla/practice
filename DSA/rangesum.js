function runProgram(input) {
    input = input.trim().split("\n")
   let test = Number(input[0])

   let [Q,L,R] = input[1].trim().split(" ").map(Number)
   let line = 2

for(let i = 0; i < Q; i++) {
   
    let[X,Y] = input[line++].trim().split(" ").map(Number)
  //  console.log(X,Y)
    rangesum(X,Y)
}
  
   
    }
    function rangesum(X,Y) {
        console.log(Math.abs(X - Y))
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      2 1 3
      6 7
      9 9`);
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
    
