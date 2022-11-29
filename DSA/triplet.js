function printAllAPTriplets(arr, n) {
    let count = 0
  for(let i = 0; i < arr.length-2; i++) {
    for(let j = i+1; j < arr.length-1; j++) {
        for(let k = j+1; k < arr.length; k++) {
            if(arr[i] + arr[j] == arr[k]) {
                count++
            }
        }
    }
  }
  if(count >= 1) {
    console.log("1")
  }else {
    console.log("0")
  }
}
function runProgram(input) {
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let n = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number).sort((a,b) => a-b)
        printAllAPTriplets(arr, n)
    }
    
   
}

if (process.env.USERNAME === "srini") {
    runProgram(`1
    5
    1 3 2 4 5`);
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