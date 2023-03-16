function runProgram(input) {
    input = input.trim().split("\n")
let test = Number(input[0])
let line = 1;
for(let i= 0; i < test; i++) {
    let n = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)
   // console.log(N,arr,test)
   maxContainer(arr,n)
}

}
function maxContainer(arr,n) {
    let l = 0;
    let r = n -1;
    let area = 0;
 
    while (l < r) {
      
        area = Math.max(area, Math.min(arr[l],
                        arr[r]) * (r - l));
         
        if (arr[l] < arr[r])
            l += 1;
        else
            r -= 1;
    }
    console.log(area);
}





   
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      9
      1 8 6 2 5 4 8 3 7`);
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
      process.on("SIGlet", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }
    
