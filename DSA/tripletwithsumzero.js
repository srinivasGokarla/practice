function runProgram(input) {
    input = input.trim().split("\n")
     let n = Number(input[0])
     let arr = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b)
     let count = 0;
     let sum = 0
     for(let i = 0; i < arr.length - 2; i++) {
      for(let j = i+1; j < n; j++) {
        for(let k = j+1; k < n; k++) {
            if(arr[i]+ arr[j]+ arr[k] === 0) {
                count++;
            } 
        }
      }
        
    }
    console.log(count)

}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      -7 1 5 2 -4 3 0`);
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
    
