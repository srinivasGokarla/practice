
  function runProgram(input) {
    input = input.split("\n");
   let N = Number(input[0])
   let arr = input[1].trim().split(" ").map(Number)
   let test = Number(input[2])
   let line = 3;
   for(let i= 0; i < test; i++) {
      let min = Number(input[line++])
     // console.log(test,arr,N,min)
    let res = FirstBigger(arr,N,min)
    if(res === undefined) {
        console.log("-1")
    } else {
        console.log(res)
    }
    
   }
}
function FirstBigger(arr,N,min) {
  let ans = []
    for(let i= 0; i < N; i++) {
      if(arr[i] > min) {
          ans.push(arr[i])
      
      } 
    }
   // console.log(ans)
    let small = ans[0]
    for(let i= 0; i < ans.length; i++) {
        if(small > ans[i]) {
            small = ans[i]
           
        } 
    }
   return small
}
if (process.env.USERNAME === 'srini') {
  runProgram(`10
  13 89 81 66 81 63 71 76 73 81
  2
  65
  15
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });

  
 
