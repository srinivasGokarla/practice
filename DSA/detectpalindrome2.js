function runProgram(input) {
    input = input.trim().split("\n");
   let test = Number(input[0])
   let line = 1;
   for(let i= 0; i < test; i++) {
       let N = Number(input[line++])
       let str = input[line++].trim().split("")
      // console.log(N,str)
      detectpalindrome2(N,str)
   }
 
}

  function detectpalindrome2(N,str) {
    let count = 0;
    let obj = {}
    for(let i = 0; i <N; i++) {
      if(obj[str[i]] === undefined) {
          obj[str[i]]  = 1
      } else {
          obj[str[i]] += 1
      }
    }
        for(var k in obj) {
            if(obj[k] % 2 === 1) {
              count++
            }
        }
          if(count > 1) {
               console.log("Not Possible!")
         
      
        } else {
              console.log("Possible!")
        }
          }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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