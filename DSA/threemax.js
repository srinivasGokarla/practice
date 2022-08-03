function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let arr = input[1].trim().split(" ").map(Number).sort((a,b) => a-b)
   // console.log(arr)
    let obj = {}
    let array = []
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] += 1
        }
    }
    for(var k in obj) {
       array.push(k)
    }
    array.sort((a,b) => a-b)

  // console.log(array.sort((a,b) => a-b))
  if(array.length <= 3) {
      console.log("Not Possible")
       console.log("Not Possible")
  } else {
      console.log(array[0], array[1],array[2])
      console.log(array[array.length-3], array[array.length-2],array[array.length-1])
  }
    }
    if (process.env.USERNAME === "srini") {
        runProgram(`10
        -4 -7 -2 -11 -2 -8 0 -122 -66 10`);
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