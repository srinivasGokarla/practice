


function sortMarks(marks){

for (i = marks.length-1; i> 0; i--){
       for (j = 0; j < i; j++){
               if (marks[j][1] < marks[j+1][1]) {
                let temp = marks[j]
                marks[j] = marks[j+1]
                marks[j+1] = temp
               }
       }
}
}
function sortNames(names){
    n = names.length
    for (i = 0; i<n; i++){
           for (j = 0; j < n-i-1; j++){
                   if (names[j][0] > names[j+1][0]) {
                    temp = names[j]
                    names[j] = names[j+1]
                    names[j+1] = temp
                   }
           }
    }
    }

function printRankList(rank){
var start = 1;
rank[0][0] = start + " " + rank[0][0];
console.log(rank[0][0])
for(let i = 1; i < rank.length; i++) {
    if(rank[i-1][1] != rank[i][1]) {
        start = i+1;
    }    
    rank[i][0] = start + " " + rank[i][0]
    console.log(rank[i][0])
}
 }

function runProgram(input) {
    input = input.trim().split("\n")
    let n = Number(input[0])
    let line = 1
    let resArr = []
    for(let i = 0; i < n; i++) {
        var [names, marks] = input[line++].trim().split(" ")
      
     var marks = Number(marks)
     // console.log(names,marks)
     arr = [names,marks]
     resArr.push(arr)
    }
    sortNames(resArr)
    sortMarks(resArr)
    printRankList(resArr)

}

    
    if (process.env.USERNAME === "srini") {
      runProgram(`6
      rancho 45
      chatur 32
      raju 30
      farhan 28
      virus 32
      joy 45`);
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