import React from "react";

function Contactos() {
  return (
    <div className="App">
    <fieldset className="formu">
			<legend>Datos Personales</legend>
			<p>Los campos con (*) son olbigatorios</p>
			<p><label>Nombres *<input type="text" name="nom" placeholder="Nombres" required="" /></label></p>
			<p><label>CI <input type="number" /></label></p>
			<p><label>Fecha de nacimiento <input type="date" /></label></p>
			<p><label>Email <input type="email" placeholder="ejemplo@info.com" /></label></p>
		</fieldset>
    <input type="submit" name="" value="Guardar" />
	
    </div>
  );
}

export default Contactos;