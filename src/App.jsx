import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { NavBar } from './componentes/NavBar';
import { ProductDetail } from './view/ProductDetail';
import { Home } from './view/Home';
function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/category/:categoryId" element={<Home />} />
        <Route path="/item/:id" element={<ProductDetail />} /> 
        <Route path="*" element="" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;