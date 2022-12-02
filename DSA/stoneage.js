function runProgram(input) {
    input = input.split("\n");
  let test = Number(input[0])
  let line  = 1;
  for(let i= 0; i < test; i++) {
    let n = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)

    //console.log(StoneAge(arr,n))
   if(StoneAge(arr,n) === true) {
  console.log(100)
   } else {
   console.log(0)
   }
 
  }
}
function StoneAge(arr,n) {
  let sum =0, sum1 = 0
  let arr1 = [], arr2 = []
  for(let i= 0; i<arr.length-2; i++) {
    sum = sum + arr[i]
    arr1.push(sum)
  } 
  for(let i = arr.length-1; i> 0; i--) {
    sum1 = sum1 + arr[i]
    arr2.push(sum1)
  } 
//console.log(arr1,arr2)
for(let j = 0; j < arr1.length; j++) {
  for(let k = 0; k < arr2.length; k++) {
    if(arr1[j] == arr2[k]) {
     return true
     } else {
    return false
     }
  }

}

}
if (process.env.USERNAME === 'srini') {
  runProgram(`2
  5
  100 8 97 2 1
  5
  100 9 96 2 1`);
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