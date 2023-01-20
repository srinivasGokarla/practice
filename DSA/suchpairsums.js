function runProgram(input) {
    input = input.trim().split("\n")
let test = Number(input[0])
let line = 1;
for(let i = 0; i < test; i++) {
    let[N,K] = input[line++].trim().split(" ").map(Number)
    let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=> a-b)
   // console.log(arr,N,K)
   console.log(sucPairReturns(arr,K))
}
}
function sucPairReturns(arr,K) {
  let left = 0,  right = arr.length - 1
  let sum = 0
    while(left < right){
            sum = arr[left] + arr[right]
            if (sum == K) return 1;
            else if (sum > K) right--;
            else{
                    left++
            }
    }
    return -1
}
 
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      5 2
      3 4 0 2 7`);
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
    
