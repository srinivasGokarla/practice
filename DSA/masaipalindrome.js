function runProgram(input) {
    input = input.trim().split("\n");
    let str = input[0].trim().split("")
   // console.log(str)
   masaiPalSubString(str)

}
function masaiPalSubString(str){
    let maxLength = 1, start = 0;
   
     for(var i = 0; i < str.length; i++) {
         for(var j = i; j < str.length; j++) {
                  let flag = 1;
        
                  // Check palindrome
                  for (let k = 0; k < (j - i + 1) / 2; k++)
                      if (str[i + k] != str[j - k])
                          flag = 0;
        
                  // Palindrome
                  if (flag!=0 && (j - i + 1) > maxLength) {
                      start = i;
                      maxLength = j - i + 1;
         }
         
     }
  }
  console.log(maxLength)
  }
//   function runProgram(input) {
//     input = input.trim().split("\n");
//     var str = input[0].trim().split("")
//     var obj = {}
//     var arr = [];
// for(var i = 0; i < str.length; i++) {
//     var sub = "";
//     for(var j = i; j < str.length; j++) {
//         sub = sub + str[j];
//        //console.log(sub)
//         palindrome(sub)
//     }
// }

// function palindrome(sub) {
//     var res = "";
//     for(var i = sub.length - 1; i >= 0; i--) {
//         res = res + sub[i];
//     }
//         if(sub == res) {
//            // console.log("palindrome")
//             obj[res] = res.length
//             arr.push(obj[res])
//         } 
//     }
//     //console.log(arr)
//     var max = arr[0];
//     for(var i = 0; i < arr.length; i++) {
//         if(max < arr[i]) {
//             max = arr[i]
           
//         }
        
//     }
//     console.log(max)
//     }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`thisracecarisgood`);
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
    
