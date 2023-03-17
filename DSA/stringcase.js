
function runProgram(input) {
    var input=input.trim().split('\n');
     let n = Number(input[0])
  // Write your code here
  // let line = '';
  //   for(let i = 1; i <n +1; i++) {
  //       line += Array(n-i).fill(' ').join('')
  //       line += Array(i).fill('#').join('')
  //       console.log(line)
  //       line = ''
  //   }
  let string = "";
  for (let j = n; j > 0; j--) {
  for (let i = 1; i <= n; i++) {
  if (i < j) {
  string += " ";
  continue;
  }
  string += "#";
  }
  if (j === 1) {
  continue;
  }
  
  string += "\n";
  }
  console.log(string);
    
 }
    

 
        if (process.env.USERNAME === "srini")
         {
          runProgram(`6`);
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