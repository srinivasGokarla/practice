function runProgram(input) {
    input = input.trim().split("\n")
     var testcases = Number(input[0])
   
     var line = 1
     for (let i = 0; i < testcases; i++) {
        var N = Number(input[line++])
        var arr = [];
        for (let j = 0; j < N; j++) {
            arr.push(input[line++].trim().split(""))
         }
        // console.log(arr);
          
          console.log(exitTheGrid(arr));
     }
   
   }
   
     function exitTheGrid(arr){
         count = 0;
         i = 0;
         j = 0;
         while(i >= 0 && j >= 0 && i < arr.length && j < arr.length){
             if (arr[i][j] == 'X') return 0;
             if (arr[i][j] == 'L'){
                 arr[i][j] = 'X';
                 j--;
             }
             else if (arr[i][j] == 'R'){
                 arr[i][j] = 'X';
                 j++;
             }
             else if (arr[i][j] == 'U'){
                 arr[i][j] = 'X';
                 i--;
             }
             else{
                 arr[i][j] = 'X';
                 i++;
             }
             count++;
         }
         return count;
   }
   if (process.env.USERNAME === 'srini') {
     runProgram(`3
     4 
     RRRR
     LLLL
     UUUU
     DDDD
     3
     LRL
     UUU
     DLR
     2
     RL
     DD
     `);
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