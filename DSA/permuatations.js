function permutation(str1, str2) {
    let n1 = str1.split('');
     let n2 = str2.split('');
     n1.sort();
     n2.sort();
   let ch1 =  ""
   let ch2 =   ""
   
     for(let i = 0; i < n1.length; i++){
         ch1 = ch1 + n1[i];
          ch2 = ch2 + n2[i];
         
     }
    // console.log(ch1,ch2)
         if(ch1 != ch2){
            console.log('No')
             
         } else if(ch1.length != ch2.length){
       console.log('No')
       
    } else {
         console.log("Yes")
    }
         
 
   
 }
 
     
    
 
   
    
    
    
 
 