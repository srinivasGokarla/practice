let str = "SSSSEEEECCCCEECCCC"
    let count = 1;
    let ans = 1
    for(let i= 0; i < str.length; i++) {
        if(  str[i] === "C" && str[i] === str[i-1]  ) {
          count++
        } else {
            ans = Math.max(count,ans);
            count = 1
        }
    }
    ans = Math.max(count,ans)
   // let arr = [...ans]
    console.log(ans)
