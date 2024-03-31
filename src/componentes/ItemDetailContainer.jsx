
import { Item } from "./Item";
import productos from "../data/productos.json"
import { useState, useEffect } from "react";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchItem = async () => {
        try {
          setTimeout(() => {
            setItem(productos[4]);
            setIsLoading(false); 
        }, 2000);
        } catch (error) {
        console.error('Error fetching item:', error);
          setIsLoading(false); 
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
    

