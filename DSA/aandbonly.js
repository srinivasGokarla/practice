function runProgram(input) {
    input = input.trim().split("\n")
    let str = input[0].trim().split("")
    let arr = []
    //console.log(str)
    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) {
            console.log(str[i])
           
            
          
        }
       
    }
    console.log(str)
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