
  function runProgram(input) {
    input = input.split("\n");
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let n = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
        let m = Number(input[line++])
        let arr1 = input[line++].trim().split(" ").map(Number)
       
      CommonElements(arr,arr1)
    }
 
}
function CommonElements(arr,arr1) {
  arr.sort((a, b) => a - b)
  arr1.sort((a, b) => a - b)
  let common = [];                  
  let i = 0, j = 0;                 
  
  while(i < arr.length && j < arr1.length) {
    
    if(arr[i] == arr1[j]) {        
      common.push(arr[i]);
      i++;
      j++;
    } else if(arr[i] < arr1[j]) {  
      i++;                        
    } else {
      j++;
    }
  }
if(common.length < 1) {
    console.log(-1)
} else {
    console.log(common.join(" "))
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