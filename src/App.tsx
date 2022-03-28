import React from 'react';

import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Nav />
            <main className="form-signin">
                <Routes>
                    <Route  path="/" element={<Home />}/>
                    <Route  path="/login" element={<Login/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
