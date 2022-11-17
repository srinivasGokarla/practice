let arr = [8,4,5,-22,-678,3454,34,33,55,22,77];
let first = -1, second = -1;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > first) {
        second = first;
        first = arr[i]
    } else if(arr[i] > second && arr[i] != first) {
        second = first;
    }
}
console.log(second)