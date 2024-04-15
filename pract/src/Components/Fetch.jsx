import React, {useState,useEffect} from "react"


const Fetch = () => {
    const[data, setData] = useState(null);
    const getData = () => 
      fetch("https://api.spacexdata.com/v5/launches/")
      .then((res)=> res.json())
    
    useEffect(() => {
      getData().then((data) => 
      setData(data))
     // console.log(data))
    }, [])
  
return (
    <div>

         <h1>Fetch</h1>
         {data?.map((item) =>
        <div>
           
<img src={item.links.flickr.original[0] } alt="" style={{width: "20%"}} />
        
           
        </div>)} 
       
       
    </div>
)
}
export {Fetch}