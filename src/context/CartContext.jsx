
import { createContext, useState, useEffect} from "react";
export const CartContext = createContext();
import {getFirestore, getDocs, collection} from "firebase/firestore";
export const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos]=useState([])
    useEffect(() => {

        const db = getFirestore();
        const refCollection = collection(db, "itemCollection");
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No se encontraron productos");
            } else {
                const fetchedItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProductos(fetchedItems);
                console.log("Productos cargados correctamente");
            }
        })
    }, []);
    const addToCart = (producto, cantidad) => {
        const existeEnCarrito = carrito.some(item => item.producto.id === producto.id);
        if (existeEnCarrito) {
            const nuevoCarrito = carrito.map(item =>
                item.producto.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
            );
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, { producto, cantidad }]);
        }
        alert(`Se agregaron ${cantidad} productos al carrito`);
        console.log(carrito);
    };

    const removeList = () => {
        setCarrito([]);
    }
    const deleteItem = (id) => {
        const nuevoCarrito = carrito.filter((product) => product.id !== id);
        setCarrito(nuevoCarrito);
    }
    const sendBuyer=()=>{
        const order={
            buyer:{
                name: this.name,
                phone: this.phone,
                email:this.email,
            },
            carrito:[
            ],
            total:this.total
        }
    }
    return (
        <CartContext.Provider value={{ carrito, addToCart, removeList, deleteItem, sendBuyer}}>
        {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;