function runProgram(input) {
    input = input.trim().split("\n")
let n = Number(input[0])
let line = 1;
let res = ""

for(let i = 0; i < n; i++) {
   
    let str = input[line++].trim().split("")
   res = res + str
   //console.log(str)
   CodingStrike(str)
}

//console.log(res)
}
function CodingStrike(str) {
    let count = 1;
    let ans = 1
   


    for(let i= 0; i < str.length; i++) {
        
        if(  str[i] === "C" && str[i] === str[i-1]  ) {
          count++
        } else {
            ans = Math.max(count,ans);
            count = 1
        }
        
    }
    ans = Math.max(count,ans)
    let arr = [...ans]

  //console.log(res)

    // console.log(ans)
   

    console.log(arr)
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4
      SSSSEEEECCCCEECCCC
      CCCCCSSSSEEECCCCSS
      SSSSSEEESSCCCCCCCS
      EESSSSCCCCCCSSEEEE
      `);
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
    
