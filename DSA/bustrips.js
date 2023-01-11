function runProgram(input) {
    input = input.trim().split("\n")
let[N,M] = input[0].trim().split(" ").map(Number)
let trip = input[1].trim().split(" ").map(Number)
let low = 1;
let high = Number.MAX_SAFE_INTEGER;
    
    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2); 
        
        if(isPossible(trip, mid, M)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

   console.log(low); 
}
function isPossible(trip, mid, M) {
    let trips = 0;
    for (let i = 0; i < trip.length; i++) {
      trips += Math.floor(mid / trip[i]);
    }
    return trips >= M;
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`3 5
      1 2 3`);
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
    
