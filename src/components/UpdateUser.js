import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UpdateUser = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <div>
      <h3>Nombre de usuario: {userName}</h3>
      <input 
        type="text" 
        placeholder="Escribe un nuevo nombre"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default UpdateUser;
