import logo from './logo.svg';
import './App.css';
import { Fetch }from "./Components/Fetch"
import Counter from "./Components/Counter"
import List from './Components/List';
import{ Real} from './Components/Real';
import Form from "./Components/Forms"
import {CountDown} from "./Components/Toggle";
import Pract from "./Components/Pract"
import DatePract from "./Components/DatePract";
import ImageGallery from "./Components/Imagegallery";
import Miniproject1 from  './Components/Miniproject1'
function App() {
  return (
    <div className="App">
   
   < Miniproject1 />
   < CountDown/>
   <Pract/>
   < DatePract/>
   < ImageGallery />
    </div>
  );
}

export default App;
