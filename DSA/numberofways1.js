function runProgram(input) {
    input = input.trim().split("\n")
 let test = Number(input[0])
 let line = 1;
 for(let i = 0; i < test;i++) {
    let n = Number(input[line++])
    console.log(countWays(n))
 }
 

}
function countWays(n)
{
    var DP = [];
    DP.length = 10;
    DP.fill(0);
 
    DP[0] = DP[1]  = 1;DP[2] = 2
    DP[3] = 3;DP[4] = 5;

    for(var i = 5; i <= n; i++)
        DP[i] = DP[i - 1] + DP[i - 2] +
                DP[i - 5];
 
    return DP[n];
}


if (process.env.USERNAME === "srini") {
    runProgram(`1
    5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}