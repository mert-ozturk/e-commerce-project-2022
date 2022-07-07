import 'antd/dist/antd.min.css'
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Products from './pages/products/Products';
const App = () => {
  return (
    < >
        <Router> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
        </Router>
    </>
  )
}

export default App