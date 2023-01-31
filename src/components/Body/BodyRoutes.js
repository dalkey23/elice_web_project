import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './bodyPages/Home';
import Parenting from './bodyPages/Parenting';
import Living from './bodyPages/Living';
import Sports from './bodyPages/Sports';
import Fassion from './bodyPages/Fassion';
import Furniture from './bodyPages/Furniture';
import Details from './bodyPages/Details';
import RegisterForm from '../Register/RegisterForm';


const BodyRoutes = () =>{
    return (<div>
    <Router>
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/RegisterForm" element = { <RegisterForm /> } />
            <Route path="/parenting" element = { <Parenting /> } />
            <Route path="/living" element = { <Living /> } />
            <Route path="/sports" element = { <Sports /> } />
            <Route path="/fassion" element = { <Fassion /> } />
            <Route path="/furniture" element = { <Furniture /> } />
            <Route path="/details" element = { <Details /> } />
        </Routes>
    </Router>
  </div>
)}

export default BodyRoutes;