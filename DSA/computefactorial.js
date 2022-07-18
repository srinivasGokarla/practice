function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1
    for(let i = 0; i < test; i++) {
        let[a,b] = input[line++].trim().split(" ").map(Number)
     //   console.log(test,a,b)
     console.log(modFact(a,b))
    }
    
    }
    function modFact(a,b){
        if (a >= b) {
            return 0;
        }
           
        let result = 1;
        for (let i = 1; i <= a; i++){
            result = (result * i) % b;
        }
        return result;
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      25 29`);
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
    
