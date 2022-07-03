import React, { Component } from "react";
import { useState } from "react";

import "../styles/components/Botones4.css";

export default function Botones5 () {
  const [seleccionados, setSeleccionados] = useState([]);
  const [seleccionados2, setSeleccionados2] = useState([]);
  const [seleccionados3, setSeleccionados3] = useState([]);
  const [seleccionados4, setSeleccionados4] = useState([]);
  const click1 = "//daveceddia.com/freebies/react-metronome/click1.wav";
const click2 = "//daveceddia.com/freebies/react-metronome/click2.wav";
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
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
  ];

  const botones2 = [
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
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
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
    [],
    [0],
    [1],
    [0,1],
    [2],
    [0,2],
    [1,2],
    [0,1,2],
    [3],
    [0,3],
    [1,3],
    [0,1,3],
    [2,3],
    [0,2,3],
    [1,2,3],
    [0,1,2,3],    
  ];

  const senias2 = [
    [],
    [4],
    [5],
    [4,5],
    [6],
    [4,6],
    [5,6],
    [4,5,6],
    [7],
    [4,7],
    [5,7],
    [4,5,7],
    [6,7],
    [4,6,7],
    [5,6,7],
    [4,5,6,7],    
  ];

  const senias3 = [
    [0],
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10],
    [11],
    [12],
    [13],
    [14],
    [15],
  ];


  const handleBotonClick = (id) => {
    setSeleccionados(senias[id]);
    setSeleccionados2(senias3[id]);
  };

  const handleBotonClick2 = (id) => {
    setSeleccionados3(senias2[id]);
    setSeleccionados4(senias3[id]);
  };

  
  return (
    <div>
      <div className="botoneraa">
        <div className="btnMano1">
          {botones1.map((boton) => (
            <button
              className={`${
                seleccionados2.includes(boton.id) ? "verde" : "rojo"
              } `}
              key={boton.id}
              onClick={() => handleBotonClick(boton.id)}
            >{boton.id+1}</button>
          ))}
        </div>
        <div className="btnMano2">
          {botones2.map((boton) => (
            <button
              className={`${
                seleccionados4.includes(boton.id) ? "verde" : "rojo"
              } `}
              key={boton.id}
              onClick={() => handleBotonClick2(boton.id)}
            >{boton.id+1}</button>
          ))}
        </div>
        
      </div>
      <div className="displayy">
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
                seleccionados3.includes(dedo2.id)
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
