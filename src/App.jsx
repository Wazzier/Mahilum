import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/main'; 
import Footer from './components/Footer';
import BestSeller from './components/BestSeller'; 
import Categories from './components/Categories'; 
import Help from './components/help';
import SignInModal from './components/SignInModal';  

function App() {
  const [showModal, setShowModal] = useState(false); 

  return (
    <Router>
      <Header setShowModal={setShowModal} /> 
      <SignInModal showModal={showModal} setShowModal={setShowModal} /> 
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BestSeller" element={<BestSeller />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
