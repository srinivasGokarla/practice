let m = 1001;
    let MOD = 998244353;
   
    let dp = new Array(m);
    for(let i = 0; i < m; i++)
    {
        dp[i] = new Array(m);
        for(let j = 0; j < m; j++)
        {
            dp[i][j] = 0;
        }
    }
   
    // This function returns the required number
    // of ways where idx is the current index and
    // diff is number of boxes having different
    // color from box on its left
    function solve(idx, diff, N, M, K)
    {
        // Base Case
        if (idx > N)
        {
            if (diff == K)
                return 1;
            return 0;
        }
   
        // If already computed
        if (dp[idx][ diff] != -1)
            return dp[idx][ diff];
   
        // Either paint with same color as
        // previous one
        let ans = solve(idx + 1, diff, N, M, K);
   
        // Or paint with remaining (M - 1)
        // colors
        ans += (M - 1) * solve(idx + 1,
                diff + 1, N, M, K);
          dp[idx][ diff] = ans % MOD;
        return dp[idx][ diff];
    }
     
    let N = 3, M = 3, K = 3;
    for(let i = 0; i <= M; i++)
      for(let j = 0; j <= M; j++)
        dp[i][j] = -1;
 
    // Multiply M since first box can be
    // painted with any of the M colors and
    // start solving from 2nd box
    console.log((M * solve(2, 0, N, M, K)));
     