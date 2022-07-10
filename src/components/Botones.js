import React from "react";
import { useState } from "react";

import "../styles/components/Botones.css";

export default function Botones() {
  const [seleccionados, setSeleccionados] = useState([]);
  const botones1 = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const botones2 = [
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];

  const mano1 = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },    
  ];

  const mano2 = [
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },    
  ];

  const handleBotonClick = (id) => {
    setSeleccionados((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((i) => i !== id);
      } else {
        return [...prevState, id];
      }
    });
  };
  // console.log(seleccionados);
  return (
    <div>
      <div className="botonera">
        <div className="btnMano1">
          {botones1.map((boton) => (
            <button
              className={`${
                seleccionados.includes(boton.id) ? "verde" : "rojo"
              } `}
              key={boton.id}
              onClick={() => handleBotonClick(boton.id)}
            ></button>
          ))}
        </div>
        <div className="btnMano2">
          {botones2.map((boton2) => (
            <button
              className={`${
                seleccionados.includes(boton2.id) ? "verde" : "rojo"
              } `}
              key={boton2.id}
              onClick={() => handleBotonClick(boton2.id)}
            ></button>
          ))}
        </div>
      </div>
      <div className="display">
        <div className="mano1">
          {mano1.map((dedo1) => (
            <button
              className={`${
                seleccionados.includes(dedo1.id)
                  ? `dedo${dedo1.id}`
                  : "inactivo"
              } `}
              key={dedo1.id}
            ></button>
          ))}
          
        </div>
        <div className="mano2">
          {mano2.map((dedo2) => (
            <button
              className={`${
                seleccionados.includes(dedo2.id)
                  ? `dedo${dedo2.id}`
                  : "inactivo"
              } `}
              key={dedo2.id}
            ></button>
          ))}
          
        </div>
      </div>
    </div>
  );
}
