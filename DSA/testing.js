function add(a){
    return function(b){
     return function(c){
      return a+b+c
     }
    }
   }
   console.log(add(1)(2)(3))

function add(a) {
    return function(b){
      if(b){
        return add(a+b)
      }
      return a
    }
  }
  console.log(add(1)(2)(3)())


function sum(a,b) {
    return function(c,d){
      return a+b+c+d
    }
  }
  console.log(sum(1,2)(3,4))