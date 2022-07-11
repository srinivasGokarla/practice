let arr = [
    2, 4, 5, 2, 7, 1, 1, 1, 7, 7, 9, 3, 0, 8, 7, 9, 9, 1, 9, 7, 3, 4, 2, 7, 4,
    4, 0, 2, 2, 8, 0, 8, 9, 7, 0, 7, 1, 9, 1, 4,
  ]
function testing(list) {
    let n = arr.length;
    let  mapCount
        = new Map();
    let  mapIndex
        = new Map();
    for (let i = 0; i < n; i++) {
        if (mapCount.has(arr[i])) {
            mapCount.set(arr[i],
                         mapCount.get(arr[i]) + 1);
        }
        else {
            mapCount.set(arr[i],1);
            mapIndex.set(arr[i],i);
        }
    }

    list.sort(function(n1,n2){
         
            let freq1 = mapCount.get(n1);
            let freq2 = mapCount.get(n2);
            if (freq1 != freq2) {
                return freq2 - freq1;
            }
            else {
                return mapIndex.get(n1)
                    - mapIndex.get(
                        n2); 
                        
            }
         
    });
     console.log(list.join(" "));

    function removeDuplicates(list) {
        return list.filter((item,
            index) => list.indexOf(item) === index);
    }
    console.log(removeDuplicates(list));
    
}
testing(arr) 