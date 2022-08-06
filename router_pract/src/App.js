
import './App.css';
import { Routes, Route,Navigate } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
import Search from "./Components/Search";
import Bootstrap from "./Components/Bootstrap"

function App() {
  const Name =() => {
    return <h1>Hello, I am Name Page</h1>
  }
  return (
    <div className="App">
      <h1>React Router</h1>
      <Menu />
    <Routes >
     <Route  exact path="/" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/contact/name" element={<Name/>}/>
     <Route path="/search" element={<Search/>}/>
     <Route path="*" element={<Error/>}/>
     <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
     < Bootstrap />
    
    </div>
  );
}

export default App;
