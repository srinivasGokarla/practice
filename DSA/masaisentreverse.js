function runProgram(input) {
    input = input.trim().split("\n")
  let str = input[0].trim().split(" ")
   console.log(str)
  let ans = [];
  for(let i = str.length; i >= 0; i--) {
       ans.push(str[i])
         
  }
  ans.shift()
  console.log(ans.join(" "))
    }


    if (process.env.USERNAME === "srini") {
      runProgram(`A Transformation in education`);
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
    
