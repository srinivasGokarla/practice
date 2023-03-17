function runProgram(input) {
     input = input.trim().split("\n");
     let[x1, v1, x2, v2] = input[0].trim().split(" ").map(Number)
    // console.log(x1, v1, x2, v2)
    if(v1 < v2) {
        console.log("NO") ;
      }
      if((x2 - x1) % (v2 -v1) == 0) {
        console.log("YES");
      } else {
        console.log("NO");
      }
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`0 3 4 2`);
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