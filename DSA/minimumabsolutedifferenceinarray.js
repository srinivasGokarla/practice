function runProgram(input) {
    input = input.trim().split("\n")
     let n = Number(input[0])
     let arr = input[0].trim().split(" ").map(Number)
   console.log(minimumAbsoluteDifference(arr))
}
function minimumAbsoluteDifference(arr) {

    arr.sort((a, b) => a - b)
    let min = Math.abs(arr[0] - arr[1])
    for(let i = 1; i < arr.length - 1; i++) {
        let m = Math.abs(arr[i] - arr[i+1])
        if(m < min) {
           min = m
        }
    }
    
    return min
    
    }

if (process.env.USERNAME === 'srini') {
  runProgram(`3
  3 -7 0`);
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