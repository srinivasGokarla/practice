import React, {useState, useEffect} from 'react';

export default function Temp() {
    
const[city, setCity] = useState(null)
const[search,setSearch] = useState("delhi");

useEffect(() => {
    // const url = new URL("https://api.openweathermap.org/data/2.5" + "/" + infoType);
    // url.search = new URLSearchParams({ ...searchParams, appid: "6d514e6c31ef6012472bbc8bfa14c2d3" });

    const FetchApi = async() => {
const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
const response = await fetch(url)

const resJson =  await response.json();
console.log(resJson.main)
setCity(resJson.main)
    }
    FetchApi()
},[search])
   
  return (
    <div>
      <div>
        <input type="search"
        value={search}
        onChange={(e) => {
         setSearch(e.target.value)
        }} />
      </div>
      <div>
        <h2><i className="fa-solid fa-street-view"></i>{search}</h2>
        <h1>{city} cel</h1>
        <h3>Min : 5.25 cel || Max : 5.25 cel</h3>

      </div>
      
    </div>
  )
}
