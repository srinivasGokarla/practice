function runProgram(input) {
    input = input.trim().split("\n")
   let test = Number(input[0])
   let line = 1;
   for(let i = 0;i < test;i++) {
    let N = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)
    //console.log(arr,N)
    equal(arr,N)
   }
    
    }
    function equal(arr,N) {
        let max = arr[0];
        let min = arr[0]
        for(let i = 0; i < arr.length; i++) {
           if(arr[i] > max) {
            max = arr[i]
          
            
           } else if(arr[i] < min) {
            min = arr[i]
           }
        }
       console.log(max- min)
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      9
      2 1 2 7 9 6 4 6 7`);
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
    
