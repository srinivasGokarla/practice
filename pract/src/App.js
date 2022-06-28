import logo from './logo.svg';
import './App.css';
import { Fetch }from "./Components/Fetch"
import Counter from "./Components/Counter"
import List from './Components/List'
function App() {
  return (
    <div className="App">
     <Counter />
     <List />
     <Fetch />
     
    </div>
  );
}

export default App;
