var a = [2, 4, 8, 10];
let minEven = Number.MAX_VALUE;
 let maxEven = Number.MIN_VALUE;
 let sumEvenArr = 0;

 for (let i = 0; i < a.length; i++){
     minEven = Math.min(minEven, a[i]);
     maxEven = Math.max(maxEven, a[i]);
     sumEvenArr += a[i];
 }

 let totalTerms = 0, reqSum = 0;

 totalTerms = parseInt(minEven / 2, 10);
 let evenSumMin = (totalTerms * (totalTerms + 1));
 totalTerms = parseInt(maxEven / 2, 10);

 let evenSumMax = (totalTerms * (totalTerms + 1));

 reqSum = evenSumMax - evenSumMin + minEven;
 
 console.log(reqSum - sumEvenArr);







