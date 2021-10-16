import React from "react";
import foto from '../img/pp.jpg';
function Quiensoy() {
  return (
    <div>
<main>
         <table width="647" border="0">
  <tr>
    <td height="191">
      <img className="foto" src={foto}></img>
    </td>
    <td width="389" rowspan="2"><div id="text-2">
      <h5>NOMBRE</h5>
      <div>
        <p>JUAN EDWIN ESPINOZA CHOQUE<br />
          </p>
        <p><strong>Trabajo :</strong></p>
        <p><strong>Caja Nacional de Salud</strong><br />
          Departamento Nacional de Sistemas</p>
        </div>
    </div>
      <div id="text-3">
        <h5>DATOS PERSONALES</h5>
        <div>
          <p><strong>C.I.   </strong>9904512 LP</p>
          <p><strong>Celular:    </strong>77786486</p>
          <p><strong>Correo:    </strong>j73051411@gmail.com</p>
          <p><strong>Dirección</strong><br />
            AV. CHACALTALLA N°896 LA PAZ BOLIVIA</p>
        </div>
    </div></td>
  </tr>
  <tr>
    <td width="235"></td>
  </tr>
</table>
         </main>
        </div>
  );
}

export default Quiensoy;
