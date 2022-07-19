
function runProgram(input) {
    var input=input.trim().split('\n');
    let n = Number(input[0])
    
    for(let i= 0; i < n; i++) {
        let arr = []
        for(let j = 0; j <n; j++){
           if(i === 0 || j=== 0) {
            arr.push("*")
           } else if(i === (n-1) || j ===(n-1)) {
            arr.push("*")
           } else {
            arr.push(" ")
           }
          
        }
        console.log(arr.join(" "))
    }
  
    
 }
        if (process.env.USERNAME === "srini")
         {
          runProgram(`4`);
        }
         else 
         {
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