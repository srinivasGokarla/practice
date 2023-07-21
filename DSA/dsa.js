const a=["a","b","c","d"] // [a3,b2,c1,d0]
let arr = []
let j = a.length
for(let i = 0; i< a.length; i++) {
    j--;
  arr.push(a[i]+j)
}
console.log(arr)
const b=a.reverse().map((name,index)=> name+index)
//console.log(b)
console.log(b.reverse())

const array=["a0","b1","c2","d3"] // [a3,b2,c1,d0]

function reversing(){

    const ewArr = array.map((item,index)=>{

        return `${item.split("")[0]}${array.length-index-1}`

    })

    return ewArr

}

console.log(reversing(arr))
