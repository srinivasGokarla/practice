
function runProgram(input) {
    var input=input.trim().split('\n');
    let n = Number(input[0])
    
    for(let i= 1; i <= n; i++) {
        let arr = []
        for(let j = 1; j <=n; j++){
            arr.push(i*j)
          
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