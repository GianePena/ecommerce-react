import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { NavBar } from './componentes/NavBar';
import { ProductDetail } from './view/ProductDetail.jsx';
import { Home } from './view/Home';
import { Cart } from './view/Cart';
import {CartContextProvider  } from './context/CartContext.jsx';

function App() {

  return (
    <div className='fondo'>
    <CartContextProvider>
        <BrowserRouter>
          <div className='poster'>
            <NavBar/>
          </div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/category/:categoryId" element={<Home />} />
            <Route path="/item/:id" element={<ProductDetail />} /> 
            <Route path="/cart" element={<Cart/>} /> 
            <Route path="*" element="" />
        </Routes>
        </BrowserRouter>
  </CartContextProvider>
    </div>

  );
}
export default App;
