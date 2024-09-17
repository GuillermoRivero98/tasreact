import React, { useState } from "react";

function ListaTareas() {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        if (tarea !== "") {
            setTareas([...tareas, tarea]);
            setTarea("");
        }
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((t, i) => i !== index));
    };

    return (
        <div>
            <input
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder="Agrega una tarea"
            />
            <button onClick={agregarTarea}>Agregar</button>

            <ul>
                {tareas.map((t, index) => (
                    <li key={index}>
                        {t}
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;