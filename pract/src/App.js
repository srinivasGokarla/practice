import logo from './logo.svg';
import './App.css';
import { Fetch }from "./Components/Fetch"
import Counter from "./Components/Counter"
function App() {
  return (
    <div className="App">
     <Counter />
     <Fetch />
    </div>
  );
}

export default App;
