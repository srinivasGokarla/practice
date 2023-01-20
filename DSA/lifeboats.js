function runProgram(input) {
    input = input.trim().split("\n")
let test = Number(input[0])
let line = 1;
for(let i = 0; i < test; i++) {
    let[N,K] = input[line++].trim().split(" ").map(Number)
    let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=> a-b)
  //  console.log(arr,N,K)
  LifeBoats(arr,K)
}
}
function LifeBoats(arr,K) {
   let count = 0;

   for(let i= 0; i < arr.length; i++) {
    if(arr[i] <= K) {
        count++
    }
   }
   console.log(count)
}

 
    if (process.env.USERNAME === "srini") {
      runProgram(`2
      4 5
      3 5 3 4
      4 3
      1 2 2 3`);
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
    
