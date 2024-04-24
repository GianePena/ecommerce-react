import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Item } from "../componentes/Item.jsx"
import { ItemCount } from "../componentes/ItemCount.jsx"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext.jsx"
import {getFirestore, doc ,getDoc} from "firebase/firestore"
export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1)
  const {addToCart}=useContext(CartContext)
  useEffect(() => {
    const db = getFirestore();
    const productDocRef = doc(db, "itemCollection", id);
    getDoc(productDocRef).then((docSnap) => {
        if (docSnap.exists()) {
            setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
            console.error(`No se encontró el producto con id ${id}`);
        }
    }).catch((error) => {
        console.error(`Error al obtener el documento: ${error}`);
    });
}, [id]);

  const incremento = () => {
    setCantidad(cantidad + 1)
};
const decremento = () => {
if (cantidad > 1) {
    setCantidad(cantidad - 1)
}
};
const handleAddToCart = () => {
  addToCart(product, cantidad)
};
return (
  <div className="mainDetalle">
    <h1 className="tituloPagina">DETALLE DEL PRODUCTO</h1>
    <Link to={`/`}>
      <Button className="btnVolver" variant="outline-dark">VOLVER A LA HOME</Button> <br /><br />
    </Link>
    <div className="productDetail">
      {product && (
        <>
          <Item item={product} />
          <div className="detalle">
            <p className="productDetailText">{product.detail}</p>
            <ItemCount producto={product} stock={product.stock} cantidad= {cantidad}incremento={incremento} decremento={decremento} />
            <Button variant="outline-dark" onClick={handleAddToCart}>Agregar al carrito</Button>
            <Link to={`/cart`}>
              <Button className="btnTerminarCompra"variant="outline-dark">Terminar compra </Button> <br /><br />
            </Link>
          </div>
        </>
      )}
    </div>
  </div>
);

};
