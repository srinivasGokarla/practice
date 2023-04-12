function runProgram(input) {
    input = input.trim().split("\n")
 
    let[n,k] = input[0].trim().split(" ").map(Number)
     let arr = input[1].trim().split(" ").map(Number)

 console.log(jumpingOnClouds(c, k))

}
function jumpingOnClouds(c, k) {
    let energy = 100;
 let count = 0;
 let index;
 while (index !== 0 && energy >= 0) {
   count === 0 && (index = 0);
   index = (index + k) % c.length;
   energy = c[index] > 0 ? energy - 3 : energy - 1;
   count++;
 }

 return energy;

}
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`8 2
      0 0 1 0 0 1 1 0`);
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
    
