import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { ItemListContainer } from "../componentes/ItemListContainer.jsx";
export const Home =()=>{
    const [filterProducts, setFilterProducts] =useState([])
    const {categoryId} =useParams()

useEffect(() => {
    const db = getFirestore()
    const collectionRef = collection(db, "itemCollection")
    const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef
    getDocs(q)
        .then((querySnapshot) => {
            const filteredItems = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFilterProducts(filteredItems);
        })
        .catch((error) => {
            console.error("Error fetching products: ", error);
        });
}, [categoryId]); 
    return(
        <div>
            <Link to="/"></Link>
            <ItemListContainer categoryId={categoryId} itemsFiltrados={filterProducts}/>
        </div>
            
    )
}