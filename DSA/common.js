function runProgram(input) {
    input = input.trim().split("\n")
 let test = Number(input[0])
 let line = 1;
 for(let i = 0; i < test; i++) {
    let[a,b] = input[line++].trim().split(" ").map(Number)
   // console.log(test,a,b)
//    let res = []
//    for(let j = 1; j <= a; j++) {
//         if(a%j === 0 && b %j === 0) {
//             res.push(j)
//         }
//    }
//    console.log(res[res.length-1])
console.log(gcd(a, b))
 }
    
}
function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      3 17`);
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



    
