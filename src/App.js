import React from "react";
import Product from "./pages/Product";
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import Orders from './pages/Orders';
import Login from './pages/Login';
import Employees from './pages/Employees';
import Clients from './pages/Clients';
import NotFound from './pages/404';
import {
  Routes,
  Route,
} from "react-router-dom";
import Providers from "./pages/Providers";


function App() {

    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Products' element={<Product/>}/>
            <Route path='/Orders' element={<Orders/>}/>
            <Route path='/Employees' element={<Employees/>}/>
            <Route path='/Clients' element={<Clients/>}/>
            <Route path='/Providers' element={<Providers/>}/>
            <Route path='/404' element={<NotFound/>}/>
        </Routes>
    
    );
}

export default App;
