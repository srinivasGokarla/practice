function runProgram(input) {
    input = input.trim().split("\n")
    
    var N = Number(input[0])
    // console.log(N)
   
    let arr = [];
    for(let i = 1; i <= N; i++) {
        let count = 0;
        for(let j = 2; j <= Math.floor(i/2); j++){
            if(i % j === 0) {
                count++;
                
            }
        }
        
        if(count == 0 && i != 1) {
            arr.push(i)
            
        }
    }
    console.log(arr.join("\n"))
    
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`13`);
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
    