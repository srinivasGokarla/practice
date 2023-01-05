function runProgram(input) {
    input = input.trim().split("\n")
 let N = Number(input[0])
 let line = 1;
 let mat = []
 for(let i = 0; i < N; i++) {
    let arr = input[line++].trim().split(" ").map(Number)
    console.log(arr,N)
   mat.push(arr)
  
 }
 pushPop(mat)
    }
    function pushPop(mat) {
        let stack = []
        for(let i = 0; i < mat.length; i++) {
           
            if(mat[i][0] === 1) {
              
             stack.push(mat[i][1])
              
            } else if(mat[i][0] === 2) {
            stack.pop()
            }else if(mat[i][0] === 3) {
                if (stack.length > 0) {
                    console.log(stack[stack.length - 1]);
                  }else{
                    console.log("Empty!");
                  }
            
            }
            
      
        }
        
        
    }

 
    if (process.env.USERNAME === "srini") {
      runProgram(`6
      1 15
      1 20
      2
      3
      2
      3`);
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
    
