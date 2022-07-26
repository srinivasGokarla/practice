function runProgram(input) {
    var arr = input.trim().split("");
    var letter = "abcdefghijklmnopqrstuvwxyz";
    var number = "0123456789";
    var arr1 = [];

    for (i = 0; i < arr.length; i++){
        for (j = 0; j < letter.length;j++){
            if (arr[i] == letter[j]){
                for (k = 0; k <number.length;k++){
                    if (arr[i+1] == number[k] ){
                        for (l = 0; l < number[k];l++){
                            arr1.push(arr[i]);
                        }
                    }
                }
            }
        }
    }console.log(arr1.join(""));

}
  if (process.env.USERNAME === "srini") {
    runProgram(`a3b2`);
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