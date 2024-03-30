import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import products from "../data/productos.json"
import { Item } from "../componentes/Item"



export const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      const findProduct=products.find(p=>p.id===Number(id))
      setProduct(findProduct);
    }, [id]);
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="productDetail">
        <h1>Detalle del producto</h1>
            <Item item={product} />
            <p className="productDetailText">{product.detail}</p>
      </div>
    );
  };

