function runProgram(input) {
    input = input.trim().split("\n")
     let n = Number(input[0])
     let arr = input[1].trim().split(" ").map(Number)
    //  let count = 0;
    //  let sum = 0
    //  for(let i = 0; i < arr.length - 2; i++) {
    //   for(let j = i+1; j < n; j++) {
    //     for(let k = j+1; k < n; k++) {
    //         if(arr[i]+ arr[j]+ arr[k] === 0) {
    //             count++;
    //         } 
    //     }
    //   }
        
    // }
    // console.log(count)
    /*function runProgram(input){
    input=input.split("\n");
    let[n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
console.log(countTriplets(n,k,arr))
}
function countTriplets(n,k,arr){
      
        arr.sort(function(a,b){return b-a});

        let ans = 0;
        for (let i = 0; i < n - 2; i++){
            let j = i + 1, k = n - 1;
            while (j < k){
            
                if (arr[i] + arr[j] + arr[k] >= sum)
                    k--;
                else
                {
                    ans += (k - j);
                    j++;
                }
            }
        }
        return ans;
    }
   */
  
  
    (triplet(arr,n))
   
}
function triplet(arr,n) {
  let res = [];
  let sum = 0
  for(i=0;i<arr.length;i++){
      for(j=0;j<arr.length;j++){
          for(k=0;k<arr.length;k++){
              if(arr[i]+arr[j]+arr[k] === sum){
                 
             res.push(arr[i])
             res.push(arr[j]) 
             res.push(arr[k])   
                  break;
              }
          }
      }
  }

if(res===[]){
  console.log(false)
}else{
  console.log(true)
  console.log(res[0],res[1],res[2])
}

}

    if (process.env.USERNAME === "srini") {
      runProgram(`4
      -1 -1 -2 3`);
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
    
