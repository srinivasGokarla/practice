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
import Fetch from "./Components/Fetch";
import Time from "./Components/Time";
import DigitalTime from "./Components/DigitalTime";
import Handler from "./Components/Handler";
import Input from "./Components/Input";
import TwoInput from "./Components/TwoInput";
import SimpleForm from "./Components/SimpleForm";
import TwoInputs from "./Components/TwoInputes";
import Effect from "./Components/Effect";
import Shop from "./Components/Cart";
import Search from "./Components/Search"



function App() {
  return (
    <div className="App">
     <Simple />
     < Search />
     < TwoInputs />
     < Shop />
<hr />
     <Time />
     < DigitalTime />
     < Handler />
     <Input />
     <TwoInput />
     < SimpleForm />
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
     <Effect />
     <Fetch />
   
    
     
    </div>
  );
}

export default App;
