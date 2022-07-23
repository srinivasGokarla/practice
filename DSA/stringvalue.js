function runProgram(input) {
    input = input.trim().split("\n")
  let str = input[0].trim().split("")
  let txt = "abcdefghijklmnopqrstuvwxyz"
  let a = 1,b =2,c= 3
   let sum = 0
  for(let i = 0; i < str.length; i++){
  sum = str[i] + sum
    
  }
    console.log(sum)
}
 
    if (process.env.USERNAME === "srini") {
      runProgram(`aba`);
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
    
