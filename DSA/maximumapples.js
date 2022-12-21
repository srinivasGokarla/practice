function runProgram(input) {
    input = input.trim().split("\n")
let[n,k] = input[0].trim().split(" ").map(Number)
let arr = input[1].trim().split(" ").map(Number).sort((a,b) => a-b)
// console.log(arr,n,k)
let count = 0;
let sum = 0;
let res = []
for(let i= 0; i < arr.length; i++) {
    sum = sum + arr[i]
    count++
    if(sum <= k) {
        res.push(count)
      }
}
  console.log(res[res.length-1])
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4 20
      3 10 4 4 `);
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
    
