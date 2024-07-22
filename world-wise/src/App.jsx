import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Router>
          <Route path='/' element={<Home/>}/>
          <Route path='pricing' element ={<Pricing/>}/>
          <Route path='product' element ={<Product/>}/>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
