function runProgram(input) {
  input = input.trim().split("\n")
  var test = Number(input[0])
  let line = 1;
  for(let i = 0; i < test; i++) {
    let N = Number(input[line++])
  //  console.log(N)
  CountYourSteps(N)
  }

}
function CountYourSteps(N) {
  var count = 0
  while (N > 1) {
      if (N % 2 == 0)  {               
          N = N / 2
          count += 1
    }  else if (N % 3 == 0) {
          N = (2*N)/3
          count += 1
         } else if (N % 5 == 0){
          N = (4*N)/5
          count += 1
         
    }  else     {                     
          N = N-N
      count = count+1
  }
  }
if(N <= 0) {
  console.log(-1)
}else {
  console.log(count)
}


}
if (process.env.USERNAME === "srini") {
  runProgram(`6
  1
  10
  25
  30
  14
  27`);
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