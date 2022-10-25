function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)

let c1 = 0, c2=0, c3=0, c4=0
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 4 === 0 ) {
        c1++;
      
    } if(arr[i] % 2 == 0) {
        c2++
      
        
    } if(arr[i] % 3 === 0) {
        c3++;
       
    } if(arr[i] % 4 !== 0 && arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
        c4++
    }
}
console.log(c1,c2,c3,c4)
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`4
      1 2 3 4`);
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
    
