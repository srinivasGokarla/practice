
  function runProgram(input) {
    input = input.split("\n");
   let str = input[0].trim().split("")
  //console.log(str)
 let count = 1;
 let max = 1;
 for(let i = 0; i < str.length; i++) {
    if(str[i] == str[i-1] ) {
        count++
        
    } else {
        max = Math.max(count, max);
        count = 1
    }
   
 }
 max = Math.max(count, max)
console.log(max)
}
if (process.env.USERNAME === 'srini') {
  runProgram(`ATTCGGGA`);
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