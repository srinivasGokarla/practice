function evenmid(arr,mid)
{
var res=[];
for(var i = mid-1; i >= 0; i--)
{
  res.push(arr[i]);  
}
for(var i = arr.length-1; i >= mid; i--)
{
    res.push(arr[i]);
}
return res;
}


function oddmid(arr,mid)
{
    var res=[];
for(var i = mid-1;i >= 0;i--)
{
  res.push(arr[i]);  
}
 res.push(arr[mid]);
 
for(var i = arr.length-1; i > mid;i--)
{
    res.push(arr[i]);
}
return res;
}


function runProgram(input) {
   var input=input.trim().split('');
    var mid= Math.floor(input.length/2);
    
    if(input.length % 2 == 0)
    {
        var even = evenmid(input,mid)
        console.log(even.join(''));
    }
    else
    {
        var odd = oddmid(input,mid)
        console.log(odd.join(''));
    }
}
       
       if (process.env.USERNAME === "srini")
        {
         runProgram(`abcdxyz`);
       }
        else 
        {
         process.stdin.resume();
         process.stdin.setEncoding("ascii");
         let read = "";
         process.stdin.on("data", function (input) {
           read += input;
         });
         process.stdin.on("end", function () {
           read = read.replace(/\n$/, "");
           read = read.replace(/\n$/, "");
           runProgram(read);
         });
         process.on("SIGINT", function () {
           read = read.replace(/\n$/, "");
           runProgram(read);
           process.exit(0);
         });
       }