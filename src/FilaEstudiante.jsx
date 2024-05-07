import React from 'react';

const FilaEstudiante = ({ nombre, calificaciones }) => {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{calificaciones.matematicas}</td>
            <td>{calificaciones.ciencias}</td>
            <td>{calificaciones.historia}</td>
        </tr>
    );
};

export default FilaEstudiante;