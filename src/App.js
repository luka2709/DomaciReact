import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Naslovna from './components/Naslovna';
import Prijava from "./components/Prijava";
import Provera from "./components/Provera";
import NavBar from "./navBar";

function App() {
  return (
    <div className="App">
  <Router>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<Naslovna />}/>
    <Route exact path="/prijava" element={<Prijava />}/>
    <Route path="/provera" element={<Provera />}/>
    </Routes>
  </Router>  
  
  </div>
  );
}

export default App;
