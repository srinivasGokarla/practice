function runProgram(input) {
    input = input.trim().split("\n")
  let N = Number(input[0])
  let arr = input[1].trim().split(" ").map(Number);
  let K = N-1
    let ans = LongestSubsequence(arr,N,K)
    console.log(ans)
    }
    function LongestSubsequence(arr,N,K) {
        let dp = new Array(N);
        for(let i = 0; i < dp.length; i++) {
            dp[i] = new Array(2);

        }
        let ans = -1;
        for(let i = 0; i < N; i++) 
            for(let j = 0; j < K +1; j++) 
                dp[i][j] = -1
                for(let i = 0; i < N; i++) {
                dp[i][1] = arr[i]
                }
                for(let i = 1; i < N; i++) {
                    for(let j = 0; j < i; j++) {
                        if(arr[j] + arr[i])  {
                            for(let l = 1; l <= K-1; l++) {
                                if(dp[j][i] != -1) {
                                    dp[i][l+1] = Math.max(dp[i][l+1], dp[j][l] + arr[i])
                                }
                            }
                        }
                    }
                }
                for(let i = 0; i < N; i++) {
                    if(ans < dp[i][K])
                    ans = dp[i][K]
                }
                return(ans == -1) ? 0 : ans;
    }


    if (process.env.USERNAME === "srini") {
      runProgram(`5
        1 3 2 9 8`);
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
    
