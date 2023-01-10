
    //  * x //value of x in the expression
    //  * n //value of power in the function
    //  * r = n
    //  * function rec(x,r)
    //      * if (r==0) return 1
    //      * val = Power(x,r) //function returns the power of the funtion
    //      * ans = val/factorial(r) + rec(x,r-1) // factorial funtion returns the factorial of a number
    //      * return ans
    //  * print (ans)
    
    function runProgram(input) {
        input = input.trim().split(" ")
        let x = Number(input[0])
        let n = Number(input[1])
        r = n
        let a = etopower(x, n)
      console.log(a.toFixed(4))
      }
      function etopower(x, r)
      {
         f=1
          if (r == 0)
              return 1;
       
          // Recursive call
          let val = Math.pow(x,r)
          
    // Recursive call
    recur = etopower(x, r - 1);
 

 
    // Factorial
    f = f * r;
 ans = ((val/factorialize(r)) +  recur)
 return ans
      }
      function factorialize(r) {
        var result = r;
        if (r === 0 || r === 1) 
          return 1; 
        while (r > 1) { 
          r--;
          result *= r;
        }
        return result;
      }
      function recursion(n)
{
   // Stop condition
   if(n == 0 || n == 1)
     return 1;
      
   // Recursive condition
   else
      return n*recursion(n-1);
}
      
      
      if (process.env.USERNAME === "srini") {
        runProgram(`1 1`);
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