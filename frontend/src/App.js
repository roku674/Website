// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Experience from './pages/Experience';
import Personality from './pages/Personality';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Bots from './pages/Bots';
import TradingBot from './pages/Bots/Trading';
import Tools from './pages/Tools';
import VideoPage from './pages/VideoPage'; 
import JsonVisualizer from './pages/Json/JsonVisualizer';
import CodeTransformer from './pages/Transformer/CodeTransformer';
import CommaSeparater from './pages/Transformer/CommaSeparater';
import URLEncoder from './pages/Transformer/URLEncoder';
import RNGsus from './pages/RNG/RNGsus';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/personality" element={<Personality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/bots" element={<Bots />} />
        <Route path="/bots/trading" element={<TradingBot />} />
        <Route path="/rng/generatestring" element={<RNGsus />} />
        <Route path="/tools/separater" element={<CommaSeparater />} />
        <Route path="/tools/transformer" element={<CodeTransformer />} />
        <Route path="/tools/urlencoder" element={<URLEncoder />} />
        <Route path="/tools/visualizer" element={<JsonVisualizer />} />
        <Route path="/video/:videoSrc/:title" element={<VideoPage />} /> {/* Generic video page route */}
      </Routes>
      <Footer /> {}
    </Router>
  );
}

export default App;
