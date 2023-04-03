function runProgram(input) {
    input = input.trim().split("\n")
let s = input[0].trim().split("")
//console.log(s)

/*
 const term = s.slice(-2);
        const result = s.slice(0,s.length-2).split(":");
        if (term === 'PM' && result[0] !== '12')
                result[0] = (parseInt(result[0])+12).toString();
        else if (term === 'AM' && result[0] === '12')
                result[0] = '00';
        return result.join(":");
        

        let ending = s.charAt(8).toLowerCase();
    let min = s.charAt(3) + s.charAt(4)
    let sec = s.charAt(6) + s.charAt(7)
    let hour = s.charAt(0) + s.charAt(1)
    if(ending == 'a' && hour == '12') {
        hour = '00'
    } else if(ending == 'p' && parseInt(hour) < 12) {
        hour = (parseInt(hour) + 12).toString()
    }
    return `${hour}:${min}:${sec}`
        


        */
    const [hh, mm, ss] = s.slice(0, -2).split(':')
    const meridiem = s.slice(-2)
    if (meridiem === 'AM' && hh === '12') {
        console.log(`00:${mm}:${ss}`) 
    } else if (meridiem === 'AM')  {
        console.log(`${hh}:${mm}:${ss}`) 
    } else  if (meridiem === 'PM' && hh === '12') {
        console.log(`12:${mm}:${ss}`) 
    }else   if (meridiem === 'PM') {
        console.log(`${+hh + 12}:${mm}:${ss}`) 
    } else {
        console.log(s)
    }
    
   
   
   
}





   
    if (process.env.USERNAME === "srini") {
      runProgram(`07:05:45PM`);
    } else {
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
      process.on("SIGlet", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }
    
