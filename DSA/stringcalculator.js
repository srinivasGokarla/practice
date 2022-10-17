
  function runProgram(input) {
    input = input.split("\n");
    let N = Number(input[0])
   let str = input[1].trim().split("")
 //console.log(N,str)
let con = 0;
let vow = 0;
for(let i = 0; i < N; i++) {
    if(str[i] === "a" ||  str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        vow++
    } else {
        con++
    }
}
console.log((3*vow) + (5*con))
}
if (process.env.USERNAME === 'srini') {
  runProgram(`4
  aman`);
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