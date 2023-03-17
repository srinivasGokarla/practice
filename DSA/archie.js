function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let arr = input[1].trim().split(" ").map(Number).sort((a,b) => a-b)
let ans = 0;
for(let i = N-1; i >= 0; i--) {
  if((i+arr[i]) < N) {
    arr[i] = arr[i] + arr[i+arr[i]]
    console.log(ans, arr[i])
    ans = Math.max(ans,arr[i])
  }
}
//console.log(ans)
/*
ans =0
for i from N-1 to 0
    if i + block[i] < N
        block[i] = block[i] + block[i+block[i]]
        ans = maximum(ans,block[i])
print ans */
 }
 
   
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5
      7 3 1 2 3`);
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
    
