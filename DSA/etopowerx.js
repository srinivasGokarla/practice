

    
    function runProgram(input) {
        input = input.trim().split(" ")
        let x = Number(input[0])
        let n = Number(input[1])
        r = n
        let a = etopower(x, n)
      console.log(a.toFixed(4))
      }

      function etopower(x, r) {
        if(r == 0)
        return 1
        val = Math.pow(x,r)
        ans = val/factorialize(r) + etopower(x, r-1)
       return ans

      }

      function factorialize(r) {
        if(r <= 0){
            return 
        } else if(r === 1) {
            return 1
        } else {
            return (factorialize(r-1) * (r))
        }
    
      }

      
      if (process.env.USERNAME === "srini") {
        runProgram(`4 2`);
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