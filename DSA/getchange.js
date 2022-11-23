function getChange(x,y) {
    let currency =  [1, 5, 10, 25, 50, 100]
    let N = (x*100 - y*100)
      let ans = []
      for(let i= currency.length - 1; i>=0; i--) {
          while(N >= currency[i]) {
              ans.push(currency[i])
              N-=currency[i]
          }
      }
     // console.log(ans)
    let c1 = 0, c2 = 0, c3= 0,c4= 0,c5 = 0,c6=0
    for(let i= 0; i < ans.length; i++) {
        if(ans[i] == "1") {
            c1++
        }else if(ans[i] == "5") {
            c2++;
        } else if(ans[i] == "10") {
            c3++;
        }else if(ans[i] == "25") {
            c4++;
        }else if(ans[i] == "50") {
            c5++;
        }else if(ans[i] == "100") {
            c6++;
        }
   }
     console.log([c1,c2,c3,c4,c5,c6])
  
  }
  getChange(5, 0.99);
  getChange(3.14, 1.99)
  getChange(4, 3.14);
  getChange(0.45, 0.34)
  /*
  getChange(x, y) = [a, b, c, d, e];
  x = money that buyer gives in rupees
  y = price in rupees
  a = number of 1 paise coins
  b = number of 5 paise coins
  ...
  
  Examples
  getChange(5, 0.99); //must return [1,0,0,0,0,4]
  getChange(3.14, 1.99); // must return [0,1,1,0,0,1]
  getChange(4, 3.14); // must return [1,0,1,1,1,0]
  getChange(0.45, 0.34); // must return [1,0,1,0,0,0]*/