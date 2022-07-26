function runProgram(input) {
    input = input.trim().split("\n")
  let str = input[0].trim().split("")
 // console.log(str)
 let n = str.length
console.log(countSubstrs(str, 0, n - 1, n))
}
function countSubstrs(str, i, j, n) {

    if (n == 1)
        return 1;
    if (n <= 0)
        return 0;
   
    let res = countSubstrs(str, i + 1, j, n - 1) +
              countSubstrs(str, i, j - 1, n - 1) -
          countSubstrs(str, i + 1, j - 1, n - 2);    
   
    if (str[i] == str[j])
        res++;
   
    return res;
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`abcab`);
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
    
