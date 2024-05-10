import  { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail.jsx";

export const ItemDetailContainer = () => {
    const { id: itemId } = useParams(); 
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const db = getFirestore();
                const itemRef = doc(db, "itemCollection", itemId);
                const itemDoc = await getDoc(itemRef);

                if (itemDoc.exists()) {
                    setItem({ id: itemDoc.id, ...itemDoc.data() });
                } else {
                    console.log("Item no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el ítem:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [itemId]);

    return (
        <div className="itemDetailContainer">
            {loading ? (
                <p>Cargando ítem...</p>
            ) : item ? (
                <ItemDetail item={item} /> // Pasar el ítem recuperado a ItemDetail
            ) : (
                <p>Ítem no encontrado</p>
            )}
        </div>
    );
};
