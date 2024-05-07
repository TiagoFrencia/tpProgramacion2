import React from 'react';

const ItemCarrito = ({ nombre, precio, cantidad }) => {
    const subtotal = precio * cantidad;
    return (
        <div>
            <h2>{nombre}</h2>
            <p>{`Precio: ${precio}`}</p>
            <p>{`Cantidad: ${cantidad}`}</p>
            <p>{`Subtotal: ${subtotal}`}</p>
        </div>
    );
};

export default ItemCarrito;