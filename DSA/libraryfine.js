function runProgram(input) {
    input = input.trim().split("\n");
let[d1,m1,y1] = input[0].trim().split(" ").map(Number)
let[d2,m2,y2]  = input[1].trim().split(" ").map(Number)
if(d1-d2 >=1 && y1-y2==0 && m1-m2==0) {
    console.log((d1-d2) * 15);
}  else  if(m1-m2 >=1 && y1-y2==0) {
    console.log((m1-m2) * 500);
} else  if(y1-y2 >=1) {
    console.log(10000);
} else {
    console.log(0);
}
   
   
   
}


  if (process.env.USERNAME === "srini") {
    runProgram(`9 6 2015
    6 6 2015`);
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
