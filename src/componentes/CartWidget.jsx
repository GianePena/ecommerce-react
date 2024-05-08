
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext.jsx";

export const CartWidget = () => {
    const{carrito}=useContext(CartContext)
    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);
    return(
        <>
        <div className="containerCarrito">
            <img className="imgCarrito" src="https://cdn-icons-png.freepik.com/256/1170/1170627.png?ga=GA1.2.223757486.1701650007&" alt="carrito" />
            <p className="cantDeProductos">{totalProductos}</p>
        </div>
        
        </>
    )
}
    



