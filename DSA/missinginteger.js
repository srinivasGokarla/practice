function runProgram(input) {
    var arr = input.trim().split(" ").map(Number);
   
    let N = arr.length +1;
    let sum = 0;
    let actual_sum = (N*(N+1)/2)
    for(let i= 0; i < arr.length; i++) {
        sum += arr[i]
    }
   /*  odd numbers */
   let odd_sum = N**2;
  // console.log(odd_sum - sum)
   
    /* even sum*/
    let even_sum = N *(N+1)
    console.log(even_sum - sum)
   // console.log(actual_sum-sum)
}

if (process.env.USERNAME === 'srini') {
  runProgram(`2 4 8`);
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