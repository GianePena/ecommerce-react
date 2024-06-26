
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item=({item,})=>{
    return(
        <Card className="item"style={{ width: '23rem'}}>
            <Card.Img variant="top" className="cardImg" src={item.img} alt={item.img}/>
            <Card.Body>
                <Card.Title style={{fontWeight:900}} >{item.title}</Card.Title>
                <Card.Text>
                    Precio: ${item.price} <br />
                    Categoria: {item.category}
                </Card.Text>
                <Link to={`/item/${item.id}`}>
                <Button variant="outline-dark">DETALLE</Button>
                </Link>
            </Card.Body>
        </Card>
        
    )
}
