import React from "react";
import { useState } from "react";

import "../styles/components/Botones.css";

export default function Botones3() {
  const [seleccionados, setSeleccionados] = useState([]);
  const [sign, setSign] = useState(0);
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

  const senias = [
    [0, 7],
    [4, 5, 6, 7],
    [0, 2, 4, 6],
    [1, 3, 5, 7],
    [0, 3, 4, 7],
    [0, 1, 5, 8],
    [2, 4, 6, 7],
    [0, 4],
  ];

  const signDown = () => {
    setSign(sign - 1);
    setSeleccionados(senias[sign]);
  };

  const signUp = () => {
    setSign(sign + 1);
    setSeleccionados(senias[sign]);
  };

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
      <div className="controls">
        <div className="signDown">
          <button className="signDownBtn" onClick={signDown()}>
            -
          </button>
        </div>
        <div className="centro">
          <div className="sign">
            <h4>Seña</h4>
            <div id="sign">{sign}</div>
          </div>
        </div>
        <div className="signUp">
          <button className="signUpBtn" onClick={signUp()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
