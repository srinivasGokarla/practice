function runProgram(input) {
    input = input.trim().split("\n")
let [n,k] = input[0].trim().split(" ").map(Number)
let arr = input[1].trim().split(" ").map(Number)
        sortWithRemainder(arr, n, k)
  }


  function sortWithRemainder(arr, n, k) {
 
    let v = new Array();
 
    for (let i = 0; i < k; i++) {
        v.push([])
    }

    for (let i = 0; i < n; i++) {
        v[arr[i] % k].push(arr[i]);
    }
 
   
    for (let i = 0; i < k; i++)
        v[i].sort((a, b) => a - b);
     
       // console.log(v)
 
    let j = 0;
    for (let i = 0; i < k; i++) {
 
        for (let it of v[i]) {
 
            arr[j] = it;
            j++;
        }
    }
 
    console.log(arr)
}

      if (process.env.USERNAME === "srini") {
        runProgram(`5 6
        12 18 17 65 46`);
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