// function checkStrings(String a,String b){
//     n = a.length()
//     m = b.length()
//    for(i = 0;i<minimum(n,m);i++){
//            if (a[i] != b[i]){
//                    if (a[i] > b[i]) return true
//                    return false
//            }
//    }
//    return false
// }

// function sortNames(names,marks,n){

// for (i = 0; i<n; i++){
//        for (j = 0; j < n-i-1; j++){
//                if (checkStrings(names[j],names[j+1]) == true) swap(names,marks,j,j+1)
//        }
// }
// }

// function sortMarks(names,marks){

// for (i = 0;i<n;i++){
//        for (j = 0;j<n-i-1;j++){
//                if (marks[j] < marks[j + 1]) swap(names,marks,j,j+1)
//        }
// }
// }

// function printRankList(names,marks){
// count = 0
// rank = 1
// previous = -1
// n = names.length
// for (i = 0;i<n;i++){
//        if (marks[i] == previous){
//                    print (rank,names[i])
//        }else{
//                rank += count
//                count = 0
//                print (rank,names[i])
//        }
//        count++
//        previous = names[i]
// }
//  }
function runProgram(input) {
    input = input.trim().split("\n")
    let n = Number(input[0])
    let line = 1
    for(let i = 0; i < n; i++) {
        let[names, marks] = input[line++].trim().split(" ")
      // console.log(names)
     
    }

}
function checking(marks,names) {
    for(let i = 0; i < marks.length; i++) {
        console.log(marks[1])
    }
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