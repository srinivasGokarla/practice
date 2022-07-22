
  function runProgram(input) {
    input = input.split("\n");
  let N = Number(input[0])
  let arr = input[1].trim().split(" ").map(Number)
  let count = 1;
  let ans = 1;
  for(let i= 0; i < N; i++) {
    if(arr[i] % 2 !== 0) {
       // console.log(arr[i])
        if(arr[i] === arr[i-1]) {
            count++
        } else {
            ans = Math.max(count,ans);
            count = 1
        }
    }
    
  }
  ans = Math.max(count,ans)
    console.log(ans)
}
if (process.env.USERNAME === 'srini') {
  runProgram(`12
  1 1 1 1 2 2 2 2 2 1 1 1`);
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