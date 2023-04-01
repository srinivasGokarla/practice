function runProgram(input) {
    input = input.trim().split("\n")
let str = input[0].trim().split("")
//console.log(str)
console.log(superReducedString(str))
}
function superReducedString(str) {
  
 for(let i = 0; i < str.length; i++){
   if(str[i] === str[i+1]){
     str.splice(i, 2);
     i = -1;
    }
  }
 return str.length === 0 ? "Empty String" : str.join("");

}

if (process.env.USERNAME === "srini") {
    runProgram(`aaabccddd`);
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
  