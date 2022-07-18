function runProgram(input) {
    input = input.trim().split("\n")
   let[a,c,b] = input[0].trim().split(" ")
  
    if(c === "*") {
      console.log(a*b)
       } else if(c === "/"){
    console.log(a/b)
} else if(c === "-"){
    console.log(a-b)
} else if(c == "+") {
   
    
    console.log(Number(a) + Number(b))
} 
    }
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`2 / 3`);
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
    
