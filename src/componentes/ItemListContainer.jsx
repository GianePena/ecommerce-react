
import React, { useState, useEffect } from "react"
import productos from "../data/productos.json"
import { ItemList } from "./ItemList"
export const ItemListContainer = ({greeting}) => {
    const [items, setItems]=useState([])
    useEffect(()=>{
        const fetchProducts= async()=>{
            setTimeout(()=>{
                setItems(productos)
            }, 2000)
        }
        fetchProducts()
    },[])
    return(
        < >
            <div>
                <h1>{greeting}</h1>
            </div>
            <div >
                {items.length === 0 ? (
                <p>Cargando productos...</p>
                ) : (
                <ItemList items={items} />
        )}
        </div>
        </>
    )

}




