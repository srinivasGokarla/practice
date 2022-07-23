function runProgram(input){
    var str  = input;
    var consonent = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u"){
            consonent ++
        }
    }
  console.log(consonent);
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