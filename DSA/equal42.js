function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)
console.log(Equalto42(arr))
}
function Equalto42(arr) {
for(let i= 0; i < arr.length; i++) {
    if(arr[i] === 42) {
        return ("Yes");
        break;
    } else {
        return ("No")
    }
}
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5
      3 7 0 9 8`);
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
    
