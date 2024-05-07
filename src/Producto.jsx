import React from 'react';

const Producto = ({ nombre, precio, imagenURL }) => {
    return (
        <div style={{ border: '1px solid black', width: '200px', padding: '10px' }}>
            <img src={imagenURL} alt={nombre} style={{ width: '100%' }} />
            <h2>{nombre}</h2>
            <p>{`Precio: ${precio}`}</p>
        </div>
    );
};

export default Producto;