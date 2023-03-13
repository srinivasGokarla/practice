function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let arr = []
    for(let i= 1; i <=N; i++) {
        arr.push(i)
    }
    Drstrange(arr,N,newArr=[],0)
 }
 function Drstrange(arr,N,newArr,steps) {
    if(N === steps) {
        console.log(newArr.join(" "))
        return
    }
  if(arr.length > 0) {
    console.log(newArr.join(" "))
  }
  for(let i= steps; i < N; i++) {
    newArr.push(arr[i])
    Drstrange(arr,N,newArr,i+1)
    newArr.pop()
  }
 }
   
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`3`);
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
    
