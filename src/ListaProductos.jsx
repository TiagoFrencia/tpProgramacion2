import React from 'react';
import Producto from './Producto';
  
  const ListaProductos = ({ productos }) => {
      return (
          <div>
              {productos.map((producto, index) => (
                  <Producto 
                      key={index}
                      nombre={producto.nombre} 
                      precio={producto.precio} 
                      imagenURL={producto.imagenURL}
                  />
              ))}
          </div>
      );
  };
  
  export default ListaProductos;