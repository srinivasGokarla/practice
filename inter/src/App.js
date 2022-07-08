import logo from './logo.svg';
import './App.css';
import Simple from "./Components/Simple";
import Users from "./Components/Users";
import Toggle from "./Components/Toggle";
import Bindding from "./Components/Bindding";
import Disable from "./Components/Disable";
import Parentstate from "./Components/Parentstate"
import {Parent, Child} from "./Components/Parent";
import  Sumof from "./Components/Sumof";
import Counter from "./Components/Counter";
import Fetch from "./Components/Fetch"



function App() {
  return (
    <div className="App">
     <Simple />
   
     <Users />
     < Toggle />
     <Bindding />
     < Disable />
     < Parentstate />
     <Parent >
      <Child />
     </Parent>
     <Sumof />
     <Counter />
     <Fetch />
   
    
     
    </div>
  );
}

export default App;
