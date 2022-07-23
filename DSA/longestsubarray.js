function runProgram(input) {
    input = input.trim().split("\n")
  let test = Number(input[0])
  let line = 1;
  for(let i= 0; i < test; i++) {
    let N = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)
    LongestIncreasingSubarray(N,arr)
  }
  
    }
    function LongestIncreasingSubarray(N,arr) {
   let ans = 1;
   let max = 1;
   for(i = 0; i < N; i++) {
    if(arr[i-1] < arr[i]) {
        ans++
    } else {
        max = Math.max(ans,max)
        ans = 1
    }
   } 
         max = Math.max(ans,max)
         console.log(max)
    }


    if (process.env.USERNAME === "srini") {
      runProgram(`2
      2
      1 1
      6
      1 2 1 2 3 1
      `);
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
    
