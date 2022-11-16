
  function runProgram(input) {
    input = input.split("\n");
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let n = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
        let m = Number(input[line++])
        let arr1 = input[line++].trim().split(" ").map(Number)
        //console.log(test,n,arr,m,arr1)
      if( CommonElements(arr,arr1).length < 1) {
          console.log("-1")
      }else {
          console.log( CommonElements(arr,arr1))
      }
    }
 
}
function CommonElements(arr,arr1) {
    let ans = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j< arr1.length; j++) {
            if(arr[i] === arr1[j]) {
                ans .push(arr[i])
            }
        }
       
        }
    
}
if (process.env.USERNAME === 'srini') {
  runProgram(`2
  6
  1 2 3 4 5 6
  3
  3 3 5
  4 
  1 2 3 4
  4 
  5 6 7 8`);
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