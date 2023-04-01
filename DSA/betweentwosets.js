function runProgram(input) {
    input = input.trim().split("\n")
 let[n,m] = input[0].trim().split(" ").map(Number)
 let line = 1;
 for(let i = 0; i < n; i++) {
    let a = input[line++].trim().split(" ").map(Number)
    let b = input[line++].trim().split(" ").map(Number)
   // console.log(a,b,n,m)
   getTotalX(a, b)
 }
      
}
function getTotalX(a, b) {
    let count = 0
    let na = Math.max(...a)
    let mi = Math.min(...b)
    for(let i= na; i <= mi; i++){ // Loop between Arraya and Arrayb
    if((a.every(e => i % e === 0)) && b.every(e => e % i === 0)){
    // Check if the i(INTEGER) is Factor of Arraya & Arrayb are Factor of the i(INTEGER)
    count++ // add +1 for each found integer
    }
    }
    console.log(count)

}

if (process.env.USERNAME === "srini") {
    runProgram(`2 3
    2 4
    16 32 96`);
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
  