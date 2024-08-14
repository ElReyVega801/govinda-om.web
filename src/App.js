import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Store from './components/store/store';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'; // Asegúrate de que este archivo esté importado

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
