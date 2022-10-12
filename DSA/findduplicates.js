 let arr = [ 1, 3, 2, 1 ];

    let obj = {}
    for(let i= 0; i < arr.length; i++) {
        if(obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] += 1
        }
    }
   let res = []
    for(k in obj) {
    if(obj[k] > 1) {
        res.push(k)
    }
        
    }
  //  console.log(res.join(" "))

    // function removeDuplicates(arr) {
    //     return arr.filter((item,
    //         index) => arr.indexOf(item) === index);
    // }
    // console.log(removeDuplicates(arr));
 
