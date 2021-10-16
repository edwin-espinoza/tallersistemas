import React from "react";
import foto from '../img/ubi.png';
function Inicio() {
  return (
    <div className="ini">
    
    <h1>UNIVERSIDAD BOLIVIANA DE INFORMATICA </h1>
     <h3>ESTUDIANTE:  JUAN EDWIN ESPINOZA CHOQUE </h3>
     <h3>MATERIA: TALLER DE SISTEMAS </h3>
   
    <img className="logo" src={foto}></img>
    </div>
  );
}

export default Inicio;
