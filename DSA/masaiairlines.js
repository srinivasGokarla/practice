function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
    let N = Number(input[0])
    let arr1 = input[1].trim().split(" ").map(Number)
    let arr2 = input[2].trim().split(" ").map(Number)
    
    for(var i = 0; i < arr1.length; i++) {
    
        for(var i = 0; i < arr2.length; i++) {
    
         if(arr1[i] <= 15 && arr2[i] <= 7) {
            console.log("Boarding")
        } else {
            console.log("Stop")
        }
    }
    }
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4
      12 14 15 6
      8 5 7 4`);
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