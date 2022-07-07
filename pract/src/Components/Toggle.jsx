import { useEffect,useState } from "react";


export const CountDown = (start) => {
    // const [counter, setCounter] = useState(start);
    // useEffect(() => {
    //   if (counter === 0) {
    //     return;
    //   }
    //   setTimeout(() => {
    //     setCounter(counter - 1);
    //   }, 1000);
    // }, [counter]);
    // return <div>{counter}</div>;

    const [toggle,setToggle] = useState(false)

    if(toggle === true){
return <div>
  <h1>bye srinu</h1>
<button onClick={()=>setToggle(false)}>hie</button>
</div>
    }

    return <div>
 <h1>hie srinu </h1>
 <button onClick={()=>setToggle(true)}>bye</button>

    </div>
  };