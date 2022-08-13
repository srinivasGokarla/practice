function runProgram(input) {
  input = input.trim().split("\n")
  let N = Number(input[0])
  let str = input[1].trim().split("")
 
 Gppdstring(str,N)
}

  function Gppdstring(str,N) {
      let count = 0;
      let res = ""
  for(let i = 0; i < str.length; i++) {
     if(str.length % 2 === 0 && i % 2 == 0 && str[i] != str[i+1]) {
      res = res + str[i] + str[i+1]
     } else if(str.length % 2 === 0 && i % 2 == 0 && str[i] === str[i+1]) {
      count++;
      res = res + str[i]

     }
  }
      console.log(count)
      console.log(res)
      console.log(typeof(NaN))
      console.log(typeof(null))
      console.log(typeof(Number))
      console.log(typeof(String))
      console.log(typeof(Object))
      console.log(typeof(undefined))
  }

  
  if (process.env.USERNAME === "srini") {
      runProgram(`4
      gdgd`);
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