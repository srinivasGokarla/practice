function StringEquation(N, str) {
    let alp = "abcdefghijklmnopqrstuvwxyz"
    let count = 0, count1 = 0
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < alp.length; j++) {
            if(alp[j] === str[i]) {
                count++
            } 
        }
    }
    console.log((count*5) + ((N-count)*3))
  }