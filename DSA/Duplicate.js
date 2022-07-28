function runProgram(input){
    input = input.split("\n");
    let str = input[0].trim().split("")
    //console.log(str)
    let obj = {}
    let ans = []
    for(let i= 0; i < str.length; i++) {
        if(obj[str[i]] === undefined) {
            obj[str[i]] = 1
        } else {
            obj[str[i]] += 1
        }
    }
    //console.log(obj)
    for(let k in obj) {
        if(obj[k] === 1) {
            ans.push(k)
        }
    }
    console.log(ans[0])
  
}

if (process.env.USERNAME === "srini") {
    runProgram(`stress`);
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