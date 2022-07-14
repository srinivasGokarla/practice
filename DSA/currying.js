function calculateVolume([...arr]) {
    return function (value) {
    
            return arr*value;
        
    }
}
console.log(calculateVolume([2,2,3,4])(6));