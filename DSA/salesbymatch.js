
function runProgram(input) {
     input=input.trim().split('\n');
     let n = Number(input[0])
     let arr = input[1].trim().split(' ').map(Number).sort((a,b)=> a-b);
     let res = 0;
     for(let i=0; i<n;i++){
         if(arr[i] == arr[i+1]){
             i++;
                   res++;
            }
     }
 console.log(res)
    
 }
    
        if (process.env.USERNAME === "srini")
         {
          runProgram(`9
          10 20 20 10 10 30 50 10 20`);
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