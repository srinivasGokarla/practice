function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let str = input[1].trim().split("").map(Number)
    let count = 0;
    let ans = 0;
    let sum = 0
    for(let i = 0; i < N; i++) {
        sum = sum + str[i]
        if(str.length > 1) {
        if(str[i] == 1 && str[i-1] == 1) {
            count++;
        } else {
            ans = Math.max(ans, count);
            count = 1
        }
    } else {
        ans = 0
        count = 0
    }
    }
  
    
    ans = Math.max(count,ans)
      if(sum >= 1) {
         console.log(ans) 
      } else {
          console.log(0)
      }
      
}

if (process.env.USERNAME === "srini") {
    runProgram(`7
    1000100`);
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
  