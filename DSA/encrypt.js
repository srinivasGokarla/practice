function runProgram(input) {
    input = input.trim().split("\n")
 let str = input[0].trim().split("")
 let k = Number(input[1])
 // console.log(str,k)
 console.log(encryptStr(str,k))
  }

  function encryptStr(str,k) {
    for(let i = 0; i < str.length; i++) {
        
    }

}
  if (process.env.USERNAME === "srini") {
    runProgram(`All-convoYs-9-be:Alert1.
    4`);
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