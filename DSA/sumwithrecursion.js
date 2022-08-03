function runProgram(input) {
    input = input.trim().split("\n")
    let testcases = Number(input[0])
    let line = 1;
    for (let i = 1; i <= testcases; i++) {
        let N = Number(input[line++])
        let arr = input[line++].trim().split(" ").map(Number)
         
        sumwithrec(arr, N, j = 0, sum = 0)

    }
}

function sumwithrec(arr, N, j, sum) {
    if (j == N - 1) {
        console.log(sum)
        return;
    }

    let diff = Math.abs(arr[j] - arr[j + 1]);
    sum  = sum + diff;
    sumwithrec(arr, N, j + 1, sum)

}


if (process.env.USERNAME === "srini") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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