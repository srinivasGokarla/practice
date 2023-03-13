function runProgram(input) {
    input = input.trim().split("\n")
   // console.log(input)
  
   let test = Number(input[0])
   let line = 1;
   for (let i = 0; i < test; i++) {
     let N = Number(input[line++])
     let arr = input[line++].trim().split(" ").map(Number)
  //  console.log(N,arr, test)
  JumpingClouds(arr,N)
}
}
 function JumpingClouds(arr,N) {
    let count = 0, ans = 1
    for(let i = 0; i < N; i++) {
        if(arr[i+2] == "1") {
            count++
        } else {
            ans++
        }
    }
    console.log(count+2)
 }
   
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`2
      7
      0 0 1 0 0 1 0
      6
      0 0 0 0 1 0`);
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
    
