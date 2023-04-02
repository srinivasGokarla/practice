function runProgram(input) {
    input = input.trim().split("\n");
    let N = Number(input[0]);
    let str = input[1].trim().split("")
 //   console.log(str)
 let count = 0;
 let count1 = 0
 for(let i= 0; i < N; i++) {
    if(str[i] == "D" && count == 0) {
        count -= 1;
        count1 += 1;

     //   console.log(count)
    } else if(str[i] == "D"){
        count -= 1;
       // console.log(count1)
    } else {
        count += 1
    }
 }
  console.log(count1)
}
/* function countingValleys(steps, path) {
    // Write your code here

    let strArr = path.split('')
    let count = 0
    let result = 0
    for(let step=0; step<steps; step++){
        if(count == 0 && strArr[step].toLowerCase() == 'd'){
            count -= 1
            result += 1
        } else if(strArr[step].toLowerCase() == 'd'){
            count -= 1
        } else {
            count += 1
        }
    }
    return result
} */



  if (process.env.USERNAME === "srini") {
    runProgram(`8
    UDDDUDUU`);
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
