function catch420(n) {
    let str = n.trim().split("").map(Number)
    let ans = ""
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "4" && str[i+1] == "2" && str[i+2] == "0"){
          ans = ans + str[i] + str[i+1] + str[i+2]
        }
    }
   if(ans === "420") {
       console.log("Caught")
   } else {
       console.log("Escaped")
   }
   }