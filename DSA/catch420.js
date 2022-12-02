function runProgram(input) {
    input = input.trim().split("\n")
  let str = input[0].trim().split("").map(Number)
 // console.log(str)
  console.log(Catch420(str))

} 
function Catch420(str) {
    let ans = ""
for(let i = 0; i < str.length; i++) {
    if(str[i] == 4 && str[i+1] == 2  && str[i+2] == 0 ) {
        ans = ans + str[i] + str[i+1] + str[i+2]
    } 
}
  if(ans == 420){
    return "Caught"
  } else {
    return "Escaped"
  }
    }


    if (process.env.USERNAME === "srini") {
      runProgram(`97420`);
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
