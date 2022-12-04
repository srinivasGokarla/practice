function runProgram(input) {
  input = input.split("\n");
let test = Number(input[0])
let line  = 1;
for(let i= 0; i < test; i++) {
  let n = Number(input[line++])
  let arr = input[line++].trim().split(" ").map(Number)

 // console.log(StoneAge(arr,n))
StoneAge(arr,n)
 
}
}
function StoneAge(arr,n) {
let sum =0, sum1 = 0
let arr1 = [], arr2 = []
for(let i= 0; i<=arr.length-1; i++) {
  sum = sum + arr[i]
  arr1.push(sum)
} 
for(let i = arr.length-1; i>= 0; i--) {
  sum1 = sum1 + arr[i]
  arr2.push(sum1)
} 
let ans = []
for(let i = 0; i < arr1.length; i++) {
for(let j = 0; j < arr2.length; j++) {
  if(arr1[i] === arr2[j] && arr1[i] + arr2[j] <= arr1[arr1.length-1]) {
   ans.push(arr1[i])
  }
}
}
if(ans.length == 0) {
  console.log(0)
} else {
  console.log((ans[ans.length-1]))
}

//console.log(arr1,arr2)

}
if (process.env.USERNAME === 'srini') {
runProgram(`4
3
6 2 2
10
5 4 5 2 4 1 3 3 7 4
7
2 1 7 4 5 1 5
4
3 1 3 4`);
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
