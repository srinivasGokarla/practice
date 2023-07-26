 let arr = [2, 4, 8, 10];
  let N = arr.length +1;
    let sum = 0;
    let actual_sum = (N*(N+1)/2)
    console.log(actual_sum)
    for(let i= 0; i < arr.length; i++) {
        sum += arr[i]
    }
   /*  odd numbers */
   let odd_sum = N**2;
  // console.log(odd_sum - sum)
   
    /* even sum*/
    let even_sum = N *(N+1)
    console.log(even_sum - sum)
