
  function runProgram(input) {
    input = input.split("\n");
   let str = input[0].trim().split("")
  //console.log(str)
 let count = 0;
 let max = 0;
 for(let i = 0; i < str.length; i++) {
    if(str[i] == str[i+1] ) {
        count++
        if(count > max) {
            max = count
        } else {
            if(count > max) {
                max = count
            };
            count = 0;
        }
        
    }
   
 }
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