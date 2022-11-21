function runProgram(input) {
    input = input.trim().split("\n");
   let n = Number(input[0])
   let arr = input[1].trim().split(" ").map(Number)
   let arr1 = input[2].trim().split(" ").map(Number)
  // console.log(n,arr,arr1)
   arr.push(...arr1)
   //console.log(arr)
   sorting(arr)
   }
   function sorting(arr){
    for(var i = 0; i < arr.length - 1; i++){
        let flag = false;
        for(var j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if(flag == false){
           // console.log(flag);
            break;
        }
    }
    console.log(arr.join(" "))
}
 

  
  if (process.env.USERNAME === "srini") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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