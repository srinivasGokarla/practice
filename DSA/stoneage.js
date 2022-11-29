function runProgram(input) {
    input = input.split("\n");
  let test = Number(input[0])
  let line  = 1;
  for(let i= 0; i < test; i++) {
    let N = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)
    //console.log(arr,N,test)
  if(
    StoneAge(arr,N) == true) {
        console.log("100")
    } else {
        console.log("0")
    }
  }

}
function StoneAge(arr,N) {
   let left = 0, right = arr.length-1;
   let sum = 0,sum1= 0
  
   while(left < right) {
    sum1 = sum1 + arr[right];
   sum = sum + arr[left];
    if(sum === sum1) {
      return true;

        
    }else if(sum < sum1) {
        sum = sum + arr[left];
        left++;
        return false
        console.log(sum,sum1)

    } else if(sum > sum1) {
        sum1 = sum1 + arr[right]
        right--;
        
        return false
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