
import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas }) => {
    return (
        <div>
            {tareas.map((tarea, index) => (
                <Tarea 
                    key={index}
                    descripcion={tarea.descripcion} 
                    estado={tarea.estado} 
                />
            ))}
        </div>
    );
};

export default ListaTareas;