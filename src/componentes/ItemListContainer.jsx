import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

import productos from "../data/productos.json"
export const ItemListContainer = ({itemsFiltrados}) => {
    const [items, setItems] = useState([]);
    const uploadData = async () => {
        const db = getFirestore();
        const controlDocRef = doc(db, "settings", "dataUploadControl");
        const controlDocSnap = await getDoc(controlDocRef);
        if (controlDocSnap.exists() && controlDocSnap.data().dataUploaded) {
            console.log('Los datos ya han sido cargados previamente.');
            return;
        }
        const collectionRef = collection(db, "itemCollection");
        try {
            for (const item of productos) {
                await addDoc(collectionRef, item);
            }
            await setDoc(controlDocRef, { dataUploaded: true });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        uploadData();
        const db = getFirestore();
        const refCollection = collection(db, "itemCollection");
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No se encontraron productos");
            } else {
                const fetchedItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setItems(fetchedItems);
                console.log("Productos cargados correctamente");
            }
        })
    }, []);


    return (
        <div className="home">
            <div>
                <h1 className="tituloPagina">HOME</h1>
            </div>
            <div className="productList">
                {itemsFiltrados && itemsFiltrados.length > 0 ? (
                    <ItemList items={itemsFiltrados} />
                ) : (
                    <p>Cargando productos...</p>
                )}
            </div>
        </div>
    );
};

