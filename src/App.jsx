import './App.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <div>        
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App