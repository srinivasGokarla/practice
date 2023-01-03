function runProgram(input) {
  input = input.trim().split("\n")
  var testcases = Number(input[0])
  var line = 1;
  for(var i = 0; i < testcases; i++) {
      var n = Number(input[line++])
     
   if(Nick(n)  === true) {
      console.log("Yes")
   } else {
      console.log("No")
   }
  }
  }

  function Nick(n) {
      if (n == 1)
      return true;
  if (n == 0)
      return false;
  if (n % 20 == 0)
      return  Nick(n / 20) ||  Nick(n / 10);
  else if (n % 10 == 0)
      return  Nick(n / 10);
  return false;
  }

  if (process.env.USERNAME === "srini") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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