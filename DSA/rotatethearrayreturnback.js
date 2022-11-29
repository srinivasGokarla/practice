function runProgram(input) {
    input = input.trim().split("\n")
     let test = Number(input[0])
     let line = 1;
     for(let i = 0; i < test; i++) {
        let[n,k] = input[line++].trim().split(" ").map(Number)
        let arr = input[line++].trim().split(" ").map(Number)
       // console.log(test,n,k,arr)
       RightRotate(arr, n, k)
     }
function RightRotate(arr, n, k){
 
   k = k % n;
 let ans = []
    for (let i = 0; i < n; i++) {
        if (i < k) {
          ans.push(arr[n + i - k])
          // console.log(arr[n + i - k]);
        } else {
          ans.push(arr[i - k])
         // console.log((arr[i - k]));
        }
    }
   console.log(ans.join(" "))
}
 

}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      2 1
      1 2
      2 2
      1 2
      3 1
      1 2 3`);
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
    
