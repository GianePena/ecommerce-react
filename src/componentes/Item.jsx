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

