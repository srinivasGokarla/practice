 let arr = [8,7,4,6,9,3,2,1]
 let newarr=[8,1,4,3,9,6,2,7]
 let left = 0, right = arr.length-1
 let mid = Math.floor(left + right/2)

 for(let i = 0; i < arr.length; i++) {
   if(i % 2 != 0) {
    console.log(arr[i])
      let temp = arr[i];
      arr[i] = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left += 2;
      right -= 2;
    
   }
 }

// console.log(arr)
