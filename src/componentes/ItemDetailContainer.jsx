
import { Item } from "./Item";
import productos from "../data/productos.json"
import { useState, useEffect } from "react";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchItem = async () => {
        try {
          // Simulación de una llamada asíncrona que devuelve un item después de 2 segundos
          setTimeout(() => {
            // Aquí puedes realizar la lógica para obtener el item, 
            // en este ejemplo, simplemente selecciono el primer item del array productos
            setItem(productos[4]);
            setIsLoading(false); // Cuando se recibe el item, se marca como no cargando
        }, 2000);
        } catch (error) {
        console.error('Error fetching item:', error);
          setIsLoading(false); // Si ocurre un error, también se marca como no cargando
        }
    };
    fetchItem();
    }, []); 

    return (
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : item ? (
            <Item item={item}  />
          ) : (
            <p>No item found</p>
          )}
        </div>
      );
    };
    

/*
const getItem=async()=>{
    const [getProducts, setGetProducts]=useState([])
    useEffect(()=>{
        const fetchProducts= async()=>{
            setTimeout(()=>{
                setGetProducts(getProducts)
            }, 2000)
        }
    }, [])
    return(
        <div>
        </div>
    )
}*/

//function itemDetailContainer(){}