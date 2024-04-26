
import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext.jsx";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import Swal from 'sweetalert2'
export const Cart = () => {
    const { carrito, removeList, deleteItem} = useContext(CartContext);
    const [name, setName]=useState("")
    const [phone, setPhone]=useState("")
    const [email, setEmail]=useState("")
    const total = carrito.reduce((acc, item) => {
        const precioProducto = item.producto.price;
        const cantidad = item.cantidad;
        const precioTotalItem = precioProducto * cantidad;
        return acc + precioTotalItem;
    }, 0);

    const showAgradecimiento=()=>{
        Swal.fire({
            title: "Seguro desea confirmar la compra?",
            text: "¡No podrás revertir esto!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si!"
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Compra realizada con exito!",
                text: "Los  detalles llegaran a su email.",
                icon: "success"
            });
            removeList()
            }
        });
        const uploadBuyer = async (order) => {
    
            const db = getFirestore();
            const refCollection = collection(db, "orders");
            await setDoc(doc(refCollection), order);
    };

    const sendBuyer = async () => {
        const order = {
            buyer: {
                name,
                phone,
                email,
            },
            carrito,
            total,
            date:new Date().toLocaleString() 
        };
        console.log(order)
        await uploadBuyer(order)

        setName("")
        setPhone("")
        setEmail("")
    }
    sendBuyer()
    }
    
    return (
        <div>
            <h1 className="tituloPagina">CART</h1>
                    <Link to={`/`}>
                        <Button className="btnVolver" variant="outline-dark">VER PRODUCTOS</Button><br />
                    </Link>
                    <div className="">
            {carrito.length != 0 ? (
                <div className="productoCart">
                    <div>
                        <ul>
                            {carrito.map((item, index) => (
                                <li className="productCart"key={index}>
                                    <img className="imgProductoCarrito"src={item.producto.img} alt={item.producto.price} />
                                    <div className=" contenidoCart">
                                        <Button  variant="outline-dark" className="btnCancelar" onClick={() => deleteItem(item.producto.id)}>X</Button>
                                        <h3 className="productTitle">{item.producto.title}</h3>
                                        <p>Precio unitario: ${item.producto.price}</p>
                                        <p>Cantidad: {item.cantidad}</p>
                                        <p >Precio total: ${item.producto.price * item.cantidad}</p>
                                        </div>
                                    
                                </li>
                            ))}
                        </ul> 
                    </div> 
                    <h4 className="total">Total a pagar: ${total}</h4>
                    <div className="formulario">
                        <h3 className="tituloFormulario">Datos del cliente</h3>
                        <label>Nombre completo:</label>
                        <input type="text" className="nombre" value={name} onChange={(e) => setName(e.target.value)} /><br />
                        <label>Nº telefonico:</label>
                        <input type="text" className="telefono"  value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
                        <label >Email</label>
                        <input type="text" className="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                    </div>
                    <Button className="btnConfirmarCompra" variant="outline-dark" onClick={() => 
                    { if (name !== "" && phone !== "" && email !== "") {
                        showAgradecimiento()
                    } else {
                        Swal.fire({
                            title: "Datos incompletos",
                            text: "Por favor, completa todos los campos.",
                            icon: "warning",
                        });
                            }
                    }} >
                        CONFIRMAR COMPRA
                        </Button><br /><br />
                </div>
            ) : (
                <h1 className="comenzarCompra">Comenzar compra</h1>
            )}
        </div>
        </div>
    )
}
