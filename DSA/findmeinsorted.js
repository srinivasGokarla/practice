function runProgram(input) {
    input = input.trim().split("\n");
    let testcases = Number(input[0]);
    let  line = 1;
    for (let i = 0; i < testcases; i++) {
        let [n,k] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
 //console.log(arr,n,k)
 console.log(getIndexInSortedArray(arr,
    n, k))
    }
    function getIndexInSortedArray(arr,n, k) {

let count = 0;
for (let i = 0; i < n; i++) {

if (arr[i] < arr[k])
count++;

if (arr[i] == arr[k] && i < k)
count++;
}
return count;
}


}
if (process.env.USERNAME === "srini") {
    runProgram(`3
    7 0
    4 1 4 3 4 2 0
    7 2
    4 1 4 3 4 2 0
    4 3
    4 3 2 1`);
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