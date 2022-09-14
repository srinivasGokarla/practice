function cardvalues(x,arr){
    // write code here
    let res = []
    for(let i = 0; i < x; i++) {
        for(let j = i+1; j < x; j++) {
            if(arr[i] * 2 === arr[j]) {
               res.push(arr[i])
            }
        }
    }
    if(res.length > 0) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}