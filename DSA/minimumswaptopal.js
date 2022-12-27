function isValid(str) {
    let counter = new Array(26).fill(0);
    let oddCount = 0;

    for (let i = 0; i < str.length; i++) {
        counter[str[i].charCodeAt(0) - 97]++;
    }
    for (let value of counter) {
        if (value % 2 != 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}

function minSwaps(str,n) {
    if (!isValid(str)) {
        return -1;
    }

    let count = 0;
    
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let left = i;
        let right = n - left - 1;
        while (left < right) {
            if (str[left] === str[right]) {
                break;
            } else {
                right--;
            }
        }
        if (left === right) {
  
            [str[left], str[left + 1]] = [str[left + 1], str[left]];
            count++;
            i--;
        } else {
            for (let j = right; j < (n - left - 1); j++) {
                [str[j], str[j + 1]] = [str[j + 1], str[j]]
                count++;
            }
        }
    }
    return count;
}
function runProgram(input) {
    input = input.trim().split("\n")
     let test = Number(input[0]);
     let line = 1
     for(let i= 0; i< test; i++) {
        let n = Number(input[line++])
        let str = input[line++].trim().split("")
       // console.log(str,n)
       console.log(minSwaps(str,n))
     }
   
}

if (process.env.USERNAME === 'srini') {
  runProgram(`2
5
aabcb
8
adbcdbad `);
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