function runProgram(input) {
    input = input.trim().split("\n")
let N = Number(input[0])
let scores = input[1].trim().split(" ").map(Number)
console.log(breakingRecords(scores))
    }
    function breakingRecords(scores) {
        let best = 0;
        let worst = 0;
        let bestScore = scores[0];
        let worstScore = scores[0];
      
        for(let i = 1; i < scores.length; i++) {
            if (scores[i] > bestScore) {
                bestScore = scores[i];
                best++;
                continue;
            }
            if (scores[i] < worstScore) {
                worstScore = scores[i]
                worst++;
                continue;
            }
        }
        return [best, worst].join(" ");
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`9
      10 5 20 20 4 5 2 25 1`);
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
    
