import React, {useState,useEffect} from "react";
import '../App.css';


const Real = () => {
    const[data, setData] = useState(null);
    const FetchData = () => 
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=> res.json())
    
    useEffect(() => {
      FetchData().then((data) => setData(data))
    }, [])
    return (
        <div>
            <h1>Practcing</h1>
            <table style={{marginLeft :"5px", marginRight :"5px"}}>
  <tr>
    <th >Id</th>
    <th>UserId</th>
    <th>Title</th>
    <th>Body</th>
  </tr>
            {data?.map((item) => <tr>
    <td>{item.id}</td>
    <td> {item.userId}</td>
    <td>{item.title}</td>
    <td>{item.body}</td>
  </tr>
  
  
 )}
 </table>
           
        </div>
    )
}

export {Real}