function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
let line = 1;
for(let i = 0; i < test; i++) {
    let string = input[line++].trim().split(" ")
 //   console.log(string)
 GoatLattin(string)
}
    
  
    }
    function GoatLattin(string) {
        let res = ""
    for(let i = 0; i < string.length; i++) {
  let ans = string[i].split("")
for(let j= 0; j < ans.length; j++) {
   if(ans[0] == "a" || ans[0] == "e" || ans[0] == "i" || ans[0] == "o" || ans[0] == "u" || ans[0] == "A" || ans[0] == "E" || ans[0] == "I" || ans[0] == "O" || ans[0] == "U") {
    res = res + ans + "ma"
   } else {
    ans.shift()
   
 //   res = res + ans + "ma"
   }
  
}

    }
   
    console.log(res)
    }


    if (process.env.USERNAME === "srini") {
        runProgram(`2
        I speak Goat Latin
        The quick brown`);
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