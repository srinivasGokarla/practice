function runProgram(input) {
    input = input.trim().split("\n")
   let n = Number(input[0])
   let s = input[1].trim().split(" ").map(Number)
   let[d,m] = input[2].trim().split(" ").map(Number)
  
console.log(birthday(s, d, m))
    }
    function birthday(s, d, m) {

        let ways = 0,
            i = 0,
            sum = 0,
            j = 0,
            index = 0;
        if(s.length === 1 && s[0] === d){
          return 1;
        }
        for(i = 0; i < s.length - (m -1); i++){
          sum = 0;
          index = i;
          for(j = 0; j < m; j++){
            sum += s[index++]
          }
          if(sum === d){
            ways++;
          }
        }
        return ways;
    
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5
      1 2 1 3 2
      3 2`);
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
    
