function runProgram(input) {
         input = input.trim().split("\n")
         const arr = ([].concat(...input));
      console.log([].concat(...input))
      const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
      console.log([].concat(...nestedArray))
      let res = []
    for(let i= 0; i < arr.length; i++) {
      if(typeof(arr[i]) === "string") {
        res.push(arr[i])
      }
    }
    console.log(res)
        }
    
        if (process.env.USERNAME === "srini") {
          runProgram(`[[1, "Hello", true], [2, "World", false], [3, "!", true]]`);
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