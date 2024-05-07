import React from 'react';

const Tarea = ({ descripcion, estado }) => {
    return (
        <div>
            <h2>{descripcion}</h2>
            <p>{`Estado: ${estado}`}</p>
        </div>
    );
};

export default Tarea;