function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1
    for(let i = 0; i < test; i++) {
        let  N = Number(input[line++])
        let[a,b] = input[line++].trim().split(" ").map(Number)
     //   console.log(test,a,b)
     
     console.log(((a*b) ** gcd(a, b) ) % 1000000007)
    }
    
    }
    function gcd(a, b)
    {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      2
      2 6`);
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
    
