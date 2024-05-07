import React from 'react';
import ItemCarrito from './ItemCarrito';

const CarritoCompras = ({ productos }) => {
    const total = productos.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);
    return (
        <div>
            {productos.map((producto, index) => (
                <ItemCarrito 
                    key={index}
                    nombre={producto.nombre} 
                    precio={producto.precio}
                    cantidad={producto.cantidad}
                />
            ))}
            <p>{`Total: ${total}`}</p>
        </div>
    );
};

export default CarritoCompras;