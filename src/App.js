import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Products from "./components/Products";
import Item from "./components/Item";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from './components/Login';

function App() {
  return (
    <div className="App">

    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products/:id' element={<Item/>}/>
        <Route path='/login' element={<Login/>}/> 
      </Routes>

    </div>
  );
}

export default App;
