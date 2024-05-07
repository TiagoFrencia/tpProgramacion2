import React from 'react';
import FilaEstudiante from './FilaEstudiante';

const TablaCalificaciones = ({ estudiantes }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Matemáticas</th>
                    <th>Ciencias</th>
                    <th>Historia</th>
                </tr>
            </thead>
            <tbody>
                {estudiantes.map((estudiante, index) => (
                    <FilaEstudiante 
                        key={index}
                        nombre={estudiante.nombre} 
                        calificaciones={estudiante.calificaciones} 
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TablaCalificaciones;