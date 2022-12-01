function runProgram(input) {
    input = input.split("\n");
  let test = Number(input[0])
  let line  = 1;
  for(let i= 0; i < test; i++) {
    let n = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)

   // console.log(StoneAge(arr,n))
   StoneAge(arr,n)
  //  if(StoneAge(arr,n) == true) {
  //   console.log(100)
  //  } else {
  //   console.log(0)
  //  }
  }
}
function StoneAge(arr,n) {
  let l = 0, r = n-1;
 
  var sum1 = arr[l], sum2 = arr[r];
  while(l < r) {
   
 // console.log(sum1,sum2)
  if(sum1 == sum2) {
    console.log("yes", sum1,sum2)
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