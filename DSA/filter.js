var str = ["1","2","a","b","3","c","4","e","f","g","5","6"]
// var filtered = str.filter(function (item) {
//     return (parseInt(item) == item);
//   });
//   console.log(filtered);

const arr = ['1', 'test', '3', 5];
const validNumbers = arr.filter(Number);

// 👇️ ['1', '3', 5]
console.log(validNumbers.join(" "));
const toNumbers = validNumbers.map(Number);
console.log(toNumbers);