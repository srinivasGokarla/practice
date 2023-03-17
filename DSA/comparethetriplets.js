function runProgram(input) {
    input = input.trim().split("\n")
let a = input[0].trim().split(" ").map(Number)
let b = input[1].trim().split(" ").map(Number)
let alice = 0, bob = 0;
let i = 0;

for(let i= 0; i < a.length; i++) {
    if(a[i] > b[i]) {
        alice = alice + 1
    } else if(a[i] < b[i]) {
        bob = bob + 1
    } else {
        // alice = 0;
        // bob = 0
    }
}
console.log(alice, bob)
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5 6 7
      3 6 10`);
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
    
