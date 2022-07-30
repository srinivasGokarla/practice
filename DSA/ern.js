
function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1;
    for(let i= 0; i < test; i++) {
      let[n,k] = input[line++].trim().split(" ").map(Number)
      let arr = input[line++].trim().split(" ").map(Number);
    //  console.log(arr,n,k)
    Earnings(arr,k)
    }
      
   }
   function Earnings(arr,k) {
      let count = 1;
      let min = arr[0];
      for(let i= 0; i < arr.length; i++) {
          if(arr[i] > min) {
             min = arr[i]
             count++
          }
      }
      console.log(count*k)
   }
  if (process.env.USERNAME === "srini")
           {
            runProgram(`2
            6 3
            8 2 3 11 11 10
            5 12
            12 20 39 45 89`);
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