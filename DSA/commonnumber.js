function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1
    for(let i = 0; i < test; i++) {
        let[a,b] = input[line++].trim().split(" ").map(Number)
     //   console.log(test,a,b)
     console.log(commDiv(a, b))
    }
    
    }
    function gcd(a, b)
    {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    function commDiv(a, b){

        let n = gcd(a, b);
        let result = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
           
            if (n % i == 0) {
               
                if (n / i == i)
                    result += 1;
                else
                    result += 2;
            }
        }
        return result;
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      16792 3218518775727032587802350799527448848360102686638042810873322657223700861821722783197939797104779236618070514875694229882571622484899211073183337907470732961129843619842514292764994030891272616985498244393991179453590523065385554163012515875708705330`);
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
    
