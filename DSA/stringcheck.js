
function runProgram(input) {
   var input=input.trim().split('\n');
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let N = Number(input[line++])
        let str = input[line++].trim().split("")
        //console.log(str,N,test)
        console.log(stringCheck(str,N))
    }
   
}
   
function stringCheck(str,N) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = '1234567890';
    let num_count = 0;
    let char_count = 0

        for(let i= 0; i < N; i++) {
           for(let j = 0; j < letters.length&& numbers.length; j++) {
            if(str[i] == letters[j]) {
                char_count++
            } else if(str[i] == numbers[j]) {
                num_count++
            }
           }
            
        }
        if(char_count > 0 && num_count > 0) {
            return "alphanumeric"
        } else if(char_count > 0 && num_count == 0 ) {
            return "chars"
        }else {
            return "numbers"
        }
}
       if (process.env.USERNAME === "srini")
        {
         runProgram(`3
         5
         ab2cd
         5
         acfgh
         3
         123`);
       }
        else 
        {
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