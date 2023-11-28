import './App.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
const Main = lazy(() => import('./pages/Main'));
const Product = lazy(() => import('./pages/Product'));
const Contact = lazy(() => import('./pages/Contact'));


function App() {
  return (
    <BrowserRouter>
      <div>        
        <Header />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App