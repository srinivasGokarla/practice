
function runProgram(input){
    var a = Number(input);
    var b = Math.floor(32/a);
    if(b == 0) {
        console.log("Too Low");
    }
    else if (a == 0) {
        console.log(-1);
    } else {
        console.log(b);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});