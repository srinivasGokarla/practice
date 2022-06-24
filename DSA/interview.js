// var i = 3;
// function change(j) {
//     j = 4;
// }
// change(i)
// console.log(i)

// MyClass = function () {
//     this.a = 'hello';
//     this.b = "world"
// }
// MyClass.prototype.a = 'jhon';
// MyClass.prototype.c = 12;
// obj = new MyClass()

// console.log(obj)


// var a = {};
// var b = a;
// a.v = 1;
// b.v = 2;

// console.log(a.v)
// function closestToZero(numbers) {
//     // Your code goes here
//    if(!numbers.length) {
//        return 0;
//    }
//    let closest = 0;
//    for(let i = 0; i < numbers.length; i++) {
// if(closest  === 0 ) {
//     closest  = numbers[i]
// } else if(numbers [i] > 0 && numbers[i] <= Math.abs(closest)) {
//     closest = numbers[i]

//    }else if(numbers [i] < 0 && -numbers[i] <  Math.abs(closest)) {
//     closest = numbers[i]
// }
//    }
// return closest
// }


// var test1 = closestToZero([-9, 8, 2, -5, 7]);
// print(test1); // Should be 2
// var test2 = closestToZero([-3, -2, -1, 1, 2, 3]);
// print(test2); // Should be 1

// function isTwin(a, b) {
//     a =  a.toLowerCase().replace(/[\W_]+/g, "");
//     b = b.toLowerCase().replace(/[\W_]+/g, "");

//     const string1 = a.split("").sort().join("");
//     const string2 = b.split("").sort().join("");

//     if(string1 === string2) {
//         return true
//     } else {
//         return false
//     }
// }
// print(isTwin("Hello", "world")); // false
// print(isTwin("acb", "bca")); // true
// print(isTwin("acb", "ba")); // false
// print(isTwin("Lookout", "Outlook")); // true