import React, { useState } from 'react';

function InputComponent() {
    const[inputValue, setInputValue] = useState('');

    const hadleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={hadleInputChange}
                placeholder="Escribe algo..."
            />
            <p>Escribiste: {inputValue}</p>

        </div>
    );
}

export default InputComponent;