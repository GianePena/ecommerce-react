import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import productsData from "../data/productos.json"
import { ItemList } from "../componentes/ItemList.jsx";
export const Home =()=>{
    const [filterProducts, setFilterProducts] =useState([])
    const {categoryId} =useParams()
    useEffect(()=>{
        if (categoryId){
            const productosfiltrados=productsData.filter(product=>product.category===categoryId)
            setFilterProducts(productosfiltrados)
        }
        else{ 
            setFilterProducts(productsData)
        }
    }, [categoryId])
    return(
        <div>
            <h1>HOME</h1>
            <div>
            <Link to="/"></Link>
            <div className="listProducts" >
                <ItemList items={filterProducts}/>
                
            </div>
            </div>
            

        </div>
    )
}