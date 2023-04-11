function runProgram(input) {
    input = input.trim().split("\n")
  let arr = input[0].trim().split(" ").map(Number)
  let count = 0, count1 = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == "1") {
        count++
    } else {
        count1++
    }
  }
  if(count < count1) {
    console.log(count1)
  } else if(count > count1) {
    console.log(count)
  } else {
    console.log("draw")
  }
    }
   
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1 2 2 1 1`);
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