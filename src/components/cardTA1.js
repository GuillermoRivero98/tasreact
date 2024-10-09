import React from 'react';
import './Card.css';

const CardTA1 = ({ title, description, assignedTo, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Asignado a:</strong> {assignedTo}</p>
      <p><strong>Fecha de Inicio:</strong> {startDate}</p>
      <p><strong>Fecha de Fin:</strong> {endDate}</p>
    </div>
  );
};

export default CardTA1;
