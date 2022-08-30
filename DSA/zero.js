function closestToZero(numbers) {
    if(!numbers.length) {
        return 0;
    }
    let closest = 0;
    for(let i = 0; i < numbers.length; i++) {
 if(closest  === 0 ) {
     closest  = numbers[i]
 } else if(numbers [i] > 0 && numbers[i] <= Math.abs(closest)) {
     closest = numbers[i]
 
    }else if(numbers [i] < 0 && -numbers[i] <  Math.abs(closest)) {
     closest = numbers[i]
 }
    }
 return closest
 }
 
 
 var test1 = closestToZero([-9, 8, 2, -5, 7]);
 console.log(test1); // Should be 2
 var test2 = closestToZero([-3, -2, -1, 1, 2, 3]);
 console.log(test2); // Should be 1