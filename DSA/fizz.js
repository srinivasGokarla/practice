let n =  15;
for(let i = 1; i<= n; i++) {

  if(i % 3 === 0 && i % 5 === 0) {
console.log("fizz and buzz")
  }else if(i % 3 === 0) {
console.log("fizz")
  } else if(i % 5 === 0) {
console.log("buzz")
  } else {
console.log(i)
  }
}
