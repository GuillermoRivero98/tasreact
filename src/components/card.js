import React from "react";

function Card({ titulo, descrpcion, pesonaAsignada, fechaInicio, fechaFin }) {
    return (
        <div className="card">
            <h2>{titulo}</h2>
            <p>{descrpcion}</p>
            <p><strong>Asignado a:</strong> {pesonaAsignada}</p>
            <p><strong>Fecha de inicio:</strong> {fechaInicio}</p>
            <p><strong>Fecha de fin:</strong> {fechaFin}</p>
        </div>
    );
}

export default Card;