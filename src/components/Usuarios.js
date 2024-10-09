import React, { useState, useEffect } from "react";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsuarios(data));
    }, []);

    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {usuarios.map((u) => (
                    <li key={usuarios.id}>
                        {u.name} - {u.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;