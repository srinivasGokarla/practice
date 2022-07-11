function runProgram(input) {
    let arr = input.trim().split(" ").map(Number);
 //    console.log(arr)
 let odd = [];
 let even = [];
 for(i=0;i<arr.length;i++){
     if(i%2===0){
 even.push(arr[i])
     }else{
         odd.push(arr[i])
     }
 }
 
 // console.log(even)
 // console.log(odd)
 
 odd.reverse()
 let res = []
 if(even.length > odd.length){
 for(let a = 0; a < even.length; a++){
 res.push(even[a])
 res.push(odd[a])
 }
 console.log(res.join(" "))
    
 }else{
     for(let a = 0;a<odd.length;a++){
             res.push(even[a])
             res.push(odd[a])
             }
             console.log(res.join(" "))
 }
   }  //8 7 4 6 9 3 2 1
    //8 1 4 3 9 6 2 7
    if (process.env.USERNAME === 'srini') {
      runProgram(`8 7 4 6 9 3 2 1`);
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