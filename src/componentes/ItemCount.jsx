

import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, cantidad, incremento, decremento})=> {
    return(
        <>
            <div className="btnCantidad">
            {cantidad < stock ? (
                    <Button variant="outline-dark" onClick={incremento}>+</Button>
                ) : (
                    <div>
                        <Button variant="outline-dark" disabled>+</Button>
                    </div>
                )}
                <p className="cantidad">{cantidad}</p>
                { cantidad > 1 ? <Button variant="outline-dark" onClick={decremento}>-</Button> : <Button variant="outline-dark" disabled>-</Button>}
            </div>
            {cantidad === stock ? (<p>Sin stock</p>) : null}
            
        </>
    )
}
