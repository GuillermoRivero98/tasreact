import React, {useState, useEffect} from "react";

function Temporizador(){
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos(segundos => segundos + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <h1>Tiempo: {segundos} segundos</h1>
        </div>
    );
}

export default Temporizador;