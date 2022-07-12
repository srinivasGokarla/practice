import logo from './logo.svg';
import './App.css';
import { Fetch }from "./Components/Fetch"
import Counter from "./Components/Counter"
import List from './Components/List';
import{ Real} from './Components/Real';
import Form from "./Components/Forms"
import {CountDown} from "./Components/Toggle";
import Pract from "./Components/Pract"
function App() {
  return (
    <div className="App">
    
   < CountDown/>
   <Pract/>
    </div>
  );
}

export default App;
