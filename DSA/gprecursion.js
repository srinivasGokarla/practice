function runProgram(input) {
    input = input.trim().split(" ")
    let n = Number(input[0])
    let r = Number(input[1])
    let a = gp(n,r)
  console.log(a.toFixed(4))
  }
  function gp(n,r){
    if(n == 0){
        return 1
    } else {
       return (1 / Math.pow(r,n)) + gp(n-1,r)
    }
  }
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`1 1`);
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