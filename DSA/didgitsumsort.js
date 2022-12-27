function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = Number(input[0]);
    var line = 1;
    for (var i = 0; i < testcases; i++) {
        var n = Number(input[line++]);
        var arr = input[line++].trim().split(" ").map(Number);
 
      digitalsort(arr)
       console.log(arr.join(" "));

    }

function digit_sum(num) {
        var sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10)
        }
        return sum
    }
function digitalsort(arr) {
    
        const sorter = (a, b) => {
                  return (digit_sum(a) - digit_sum(b)) || (a - b);
                };
               arr.sort(sorter);

    }

}
if (process.env.USERNAME === "srini") {
    runProgram(`2
    5
    1 2 10 4 11
    2
    7 24`);
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