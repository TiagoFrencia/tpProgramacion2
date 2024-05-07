import React from 'react';

const ListaUsuarios = ({ usuarios }) => {
    return (
        <ul>
            {usuarios.map((usuario, index) => (
                <li key={index}>{usuario}</li>
            ))}
        </ul>
    );
};

export default ListaUsuarios;