import React, {useState,useEffect} from 'react'

function Counter() {
    const[count, setCount] = useState(0);
   
    useEffect(() => {
        document.title = `chats(${count})`
    })

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=> setCount(count+1)}>+</button>
        <button  onClick={()=> setCount(count-1)}>-</button>
        <br/>
      

    </div>
  )
}

export default Counter
/*class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
} */