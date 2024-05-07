import React from 'react';

const RelojDigital = ({ hora, minutos }) => {
    return (
        <>
        <div>
            {`${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`}
        </div>
        </>
    );
    
};

export default RelojDigital;