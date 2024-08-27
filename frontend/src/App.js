// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Bots from './pages/Bots';
import Tools from './pages/Tools';
import VideoPage from './pages/VideoPage'; 
import JsonVisualizer from './pages/Json/JsonVisualizer';
import CodeTransformer from './pages/Transformer/CodeTransformer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bots" element={<Bots />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/visualizer" element={<JsonVisualizer />} />
        <Route path="/tools/transformer" element={<CodeTransformer />} />
        <Route path="/video/:videoSrc/:title" element={<VideoPage />} /> {/* Generic video page route */}
      </Routes>
      <Footer /> {}
    </Router>
  );
}

export default App;
