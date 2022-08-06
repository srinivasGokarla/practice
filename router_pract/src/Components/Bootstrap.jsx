import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function bootstrap() {
    const InputEvent = () => {
        alert("Testing Of Bootstrap")
    }
  return (
    <div className="container">
        <h1>Welcome to Bootstrap</h1>
        <button onClick={InputEvent} className="btn btn-success">Welcome</button>
        <div className="card" style={{width: "18rem", textAlign: "center", margin: "auto"}}>
  <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..."/>
  <div className="">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.youtube.com/watch?v=NvmkaX5PTDE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=73&ab_channel=ThapaTechnical" className="btn btn-primary">Go somewhere</a>
  </div>
 
</div>

    </div>
  )
}
