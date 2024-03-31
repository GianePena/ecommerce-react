import { useState,useEffect } from "react"
import { Link} from "react-router-dom"
import { Item } from "./Item";
import Button from 'react-bootstrap/Button';
export const ItemCount = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(true);
    const [mensaje, setMensaje] = useState('');
    const sinStock = () => {
        setStock(false);
        setMensaje("Sin stock");
    }
    function incremento() {
        if (count <= 9) {
            setCount((prev)=>prev + 1);
            if (count === 9) {
                setStock(false);
                setMensaje("Sin stock");
            }
        } else {
            setCount(count + 1);
        }
    }

    function decremento() {
        if (count > 0) {
            setCount((prev)=>prev - 1);
            if (count === 10) { 
                setStock(true);
                setMensaje('');
            }
        }
    }
    return(
        <>
        <p>{count}</p>
            <p>{mensaje}</p>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button><br />
            <Button variant="primary">Agregar al carrito</Button>
        </>
    )
}