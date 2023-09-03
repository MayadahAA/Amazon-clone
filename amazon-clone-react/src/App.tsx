import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Login from './pages/user/login'
import Cart from './components/cart'
import ProductDetiles from './pages/ProductDetiles'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<ProductDetiles/>}/>


    </Routes>

      
    </>
  )
}

export default App
