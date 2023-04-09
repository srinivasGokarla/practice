function runProgram(input) {
    input = input.trim().split("\n")
let[n, k] = input[0].trim().split(" ").map(Number)
let height = input[1].trim().split(" ").map(Number)
    console.log(hurdleRace(k,height))

  }
  function hurdleRace(k,height) {
  var max = k;
 
  for(let i= 0; i < height.length; i++) {
    if(max < height[i]) {
        max = height[i]
    }
  }
  
  if(max == k) {
    return 0
  } else {
    return(max-k)
  }
}
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`5 4
    1 6 3 5 2`);
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