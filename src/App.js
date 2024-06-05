import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
