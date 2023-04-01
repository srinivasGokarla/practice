function processData(input) {

    //Enter your code here
    arrs = input.split("\n");
    var arr = arrs[1].split(" ");
    var pivot = arr[0];
    pivotArray(parseInt(pivot), arr);
    } 
    function pivotArray(pivot, arr){
        var leftArr = [];
        var rightArr = [];
        for (var i = 0; i < arr.length; i++) {
            var testNum = parseInt(arr[i]);
            if (testNum < pivot) {
                leftArr.push(testNum);
            }        
            else if (testNum > pivot) {
                rightArr.push(testNum);
            }
        }
    var completeArr = [];
   completeArr = completeArr.concat(leftArr);
    completeArr.push(pivot);
   completeArr = completeArr.concat(rightArr);
    var pivotString = "";
    for(var j = 0; j < completeArr.length; j++){
        
    	pivotString = pivotString + completeArr[j];
        if(j != (completeArr.length-1)){
            pivotString = pivotString + " ";
    	}
    }
    console.log(pivotString);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});