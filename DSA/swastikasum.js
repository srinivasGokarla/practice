function runProgram(input) {
    input = input.trim().split("\n")
 
    
    let [n,m ]= input[0].trim().split(" ").map(Number);
    let mat = [];
    let line = 1
   for(let l = 0; l < n; l++){
       
        mat.push(input[line++].trim().split(" ").map(Number))
       
  
}
for(let k = 0; k < mat.length; k++) {
  //  console.log(mat[k].join(" "));
       
    }
//console.log(mat)
Swastikasum(mat,n,m)
}
function Swastikasum(mat,n,m) {
    let sum = 0, sum1 = 0;
    let top = 0, bottom = n-1, left = 0, right = m-1
    let mid = Math.floor(n/2);
    let mid1 =  Math.floor(m/2)
  //  console.log(mid,mid1)
    for(let i = left; i < right; i++) {
      sum = sum + mat[mid][i]
    //  console.log(sum)
    }
    for(let i = mid; i <= bottom; i++) {
        sum = sum + mat[i][right]
       
    }
   
    for(let i = mid-1; i >= top; i--) {
        sum = sum +  mat[i][left]
    }
  //  console.log(sum)

    for(j = 0; j < bottom; j++) {
        sum1 = sum1 + mat[j][mid1]
        
    }
  
    for(let j = mid1; j >= left; j--) {
        sum1 = sum1 + mat[bottom][j]
       // console.log(sum1)
    }
    for(let j = mid1+1; j <= right; j++) {
        sum1 = sum1 + mat[top][j]
        //console.log(sum1)
    } 
  
    console.log(Math.abs(sum- sum1))
   
}

if (process.env.USERNAME === "srini") {
  runProgram(`3 5
  1 2 3 4 5
  6 7 8 9 10
  11 12 13 14 15`);
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