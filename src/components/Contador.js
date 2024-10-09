import React, {useState} from "react";

function Contador(){
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        </div>
    );
}

export default Contador;