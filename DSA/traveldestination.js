function runProgram(input) {
    input = input.trim().split("\n")
     let test = Number(input[0])
     let line = 1;
     for(let i= 0; i < test; i++) {
        let N = Number(input[line++])
        TravelDestinantion(N)
     }
    }
    function TravelDestinantion(N) {
        let res = [];
       for(let i =1; i <=N; i++) {
        let str = ""
        for(let j = i; j <=N; j++){
           str += j
           res.push(str)
        }
       }
       console.log(res)
       console.log(res.length)
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`2
      3
      4`);
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
    
