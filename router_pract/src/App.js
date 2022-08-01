
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu"

function App() {
  const Name =() => {
    return <h1>Hello, I am Name Page</h1>
  }
  return (
    <div className="App">
      <h1>React Router</h1>
      <Menu />
    <Routes>
     <Route  exact path="/" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/contact/name" element={<Name/>}/>
     <Route path="*" element={<Error/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
