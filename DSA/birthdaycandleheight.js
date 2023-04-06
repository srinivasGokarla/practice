function runProgram(input) {
    input = input.trim().split("\n")
let n = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)
let obj = {}
for(let i = 0; i < arr.length; i++) {
    if(obj[arr[i]] === undefined) {
        obj[arr[i]] = 1
    } else { 
        obj[arr[i]] += 1
    }
}
let max = 0
for(k in obj) {
   if(obj[k] > max) {
    max = obj[k]
   }
}
console.log(max)
}

if (process.env.USERNAME === "srini") {
    runProgram(`4
    3 2 1 3`);
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
  