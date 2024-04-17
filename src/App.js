import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarDog from './components/Navbar';
import Home from './pages/Home';
import Donations from './pages/Donations';
import LearnAboutDogs from './pages/LearnAboutDogs';
import Login from './pages/Login';
import FooterComp from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <NavbarDog />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/donations" element={<Donations />} />
                    <Route path="/learn" element={<LearnAboutDogs />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            <FooterComp />
            </div>
        </Router>
    );
}

export default App;