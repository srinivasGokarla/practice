function runProgram(input) {
    input = input.trim().split(" ")
    let N = Number(input[0])
    let line = 1;
    for(let i= 0; i < N; i++) {
        let grades = Number(input[line++])
        console.log(gradingStudents(grades))
    }

  }
  function gradingStudents(grades) {
   
    let output = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let reminder = grades[i] % 5;
            if (reminder === 3) {
                output.push(grades[i] + 2)
            } else if (reminder === 4) {
                output.push(grades[i] + 1)
            } else {
                output.push(grades[i]);
            }

        } else {
            output.push(grades[i]);
        }
    }

    return output;
}
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`4
    73
    67
    38
    33`);
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