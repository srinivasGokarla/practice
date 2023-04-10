function runProgram(input) {
    input = input.trim().split("\n")
    let n = Number(input[0])
  let str = input[1].trim().split("")
  console.log(minimumNumber(n, str) )
}
function minimumNumber(n, str) {
    let total = 0;
    let missingCharacter = 0;
    if (n < 6) missingCharacter = 6 - n;
    if (!/[0-9]/g.test(str)) total += 1;
    if (!/[a-z]/g.test(str)) total += 1;
    if (!/[A-Z]/g.test(str)) total += 1;
    if (!/[!@#$%^&*()\-+]/.test(str)) total += 1;
    return total > missingCharacter ? total : missingCharacter;
}
 
    if (process.env.USERNAME === "srini") {
      runProgram(`11
      #HackerRank`);
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
    
