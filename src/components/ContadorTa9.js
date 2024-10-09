import React, {useState, useEffect} from "react";

function ContadorTa9(){
    const[contador, setContador]=useState(0);

    useEffect( () =>{
        document.title = `Contador: ${contador}`;
    }, [contador]);

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    );
}

export default ContadorTa9;