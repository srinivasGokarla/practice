function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)
let even_sum = 0;
let odd_sum = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        even_sum += arr[i]
    } else {
        odd_sum += arr[i]
    }
}
if(even_sum > odd_sum) {
    console.log("Even")
} else {
    console.log("Odd")
}
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4
      1 2 3 4`);
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
    
