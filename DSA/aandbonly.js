function runProgram(input) {
    input = input.trim().split("\n")
    let str = input[0].trim().split("")
    let arr = []
    //console.log(str)
    for(let i = 0; i < str.length; i++) {
    if(str[i] === "?" && str[i+1] === "b" || str[i] === "?" && str[i-1] === "b" || str[i] === "?" && str[i+3] === "b" || str[i] === "?" && str[i-3] === "b") {
      str[i] = "a"
    }else if(str[i] === "?" && str[i+1] === "a" || str[i] === "?" && str[i-1] === "a" || str[i] === "?" && str[i+3] === "a" || str[i] === "?" && str[i-3] === "a") {
      str[i] = "b"
    }
       
    }
    console.log(str.join(""))
  
     }
    if (process.env.USERNAME === "srini") {
      runProgram(`?ba??b`);
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
