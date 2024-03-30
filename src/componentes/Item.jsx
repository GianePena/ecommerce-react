import React, { useState } from 'react';
import { ItemCount } from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export const Item=({item})=>{
    return(
        <Card style={{ width: '23rem' }}>
            <Card.Img variant="top" className="cardImg" src={item.img} alt={item.img}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <p>${item.price}</p>
                    <p>{item.category}</p>
                </Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary">Detalle</Button>
                </Link>
                <ItemCount item={item}/>
            </Card.Body>
        </Card>
        
    )
}
/*
export const Item= ({item})=>{
    /*const [detalle, setDetalle]=useState('')
    const [showDetalle, setShowDetalle]=useState(false)
    function detalleDeProducto(d) {
        setShowDetalle(!showDetalle); 
        if (!showDetalle) {
            setDetalle(d); 
        } else {
            setDetalle(''); 
        }
        }
    return(
        <>
        <img src={item.img} alt="" />
        <h3 key={item.id}>
            {item.title}
            {item.price}
        </h3>
        </>
    )
        
}
 /*<ItemCount stock={product.stock} />
        {showDetalle && <p>{product.detalle}</p>}
        <button onClick={detalleDeProducto}>Ver detalle</button>*/
