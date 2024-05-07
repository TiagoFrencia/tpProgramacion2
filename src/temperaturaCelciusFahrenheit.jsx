import React from 'react';

const ConvertidorTemperatura = ({ temperatura, unidad }) => {
    const convertirTemperatura = () => {
        if (unidad === 'C') {
            return (temperatura * 9/5) + 32;
        } else if (unidad === 'F') {
            return (temperatura - 32) * 5/9;
        }
    };

    return (
        <div>
            {`La temperatura convertida es: ${convertirTemperatura().toFixed(2)}`}
        </div>
    );
};

export default ConvertidorTemperatura;