import React from 'react';

const CalculadoraPropina = ({ total, porcentajePropina }) => {
    const propina = (total * porcentajePropina) / 100;

    return (
        <div>
            {`La propina es: ${propina.toFixed(2)}`}
        </div>
    );
};

export default CalculadoraPropina;