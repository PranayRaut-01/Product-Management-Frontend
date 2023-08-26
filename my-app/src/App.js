import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import Switch from "react-router";

import Login from './component/login';
import HomePage from './component/home';
import Order from './component/order';
import Cart from './component/cart';
import Navbar from './component/navbar';

function App() {
  return (
  
    <Router>
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
</Router>
  );
}

export default App;
