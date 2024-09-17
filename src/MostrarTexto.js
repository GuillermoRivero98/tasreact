import React, {useState} from "react";

function MostrarTexto(){
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar" : "Mostrar"}
            </button>
            {visible && <p>El texto magico</p>}
        </div>
    );
}

export default MostrarTexto;