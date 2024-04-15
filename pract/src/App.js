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
import Miniproject1 from  './Components/Miniproject1';
import Interview1 from "./Components/Interview1";
import Restart from "./Components/Restart";
import DigitalTime from "./Components/DigitalTime";
import Parentstate from "./Components/Parentstate";

function App() {
  return (
    <>
  
  < Miniproject1 />
  < CountDown/>
  < DigitalTime />
  < Parentstate />
  < DatePract/>
  < ImageGallery />
   < Interview1 />
   {/* <Fetch /> */}
   < Form/>
   < List />
   <Pract/>
   <Real/>
   <Restart />
   {/* <Test/> */}
   
    </>
  );
}

export default App;
