function runProgram(input) {
    input = input.trim().split("\n")
  let test = Number(input[0])
  let line = 1;
  for (let i = 0; i < test; i++) {
    let N = Number(input[line++])
    let arr = input[line++].trim().split(" ").map(Number)
 // console.log(N,arr,test)
 financialProblemn(arr,N)
  }
  function financialProblemn(arr,N) {
         let res = [];
        let ans = [];
        for(let i=0; i < N; i++) {
            while(res.length != 0 && arr[res[res.length-1]] <= arr[i]) 
                        res.pop();
                     
            if(res.length == 0)
                ans.push(i+1);
            else
            {
                let top = res[res.length-1];
                ans.push(i-top);
            }
            res.push(i);
        }
     
        console.log(ans.join(" "))
  }

    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      6
      100 60 70 65 80 85`);
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