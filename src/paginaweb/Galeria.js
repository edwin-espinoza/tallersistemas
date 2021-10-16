import React from "react";
import foto from '../img/a.jpg';
import foto1 from '../img/b.jpg';
import foto2 from '../img/c.jpg';
import foto3 from '../img/e.jpg';
function Galeria() {
  return (
    <div className="divi" >
       <table width="50%" border="0" >
  <tr>
    <td>
    <img className="foto" src={foto}></img>
    </td>
    <td><h4>Cada vez que pienso en ti</h4>
      <p>
      
Cada vez que pienso en ti,

mis ojos rompen en llanto;

y muy triste me pregunto,

¿por qué te quiero tanto?</p>
      </td>
  </tr>
  <tr>
    <td>
    <h4>Tus ojos son lucero</h4>
    <p>
    
Tus ojos son luceros,

tus labios, de terciopelo,

y un amor como el que siento,

es imposible esconderlo.
    </p>
    </td>
    <td> <img className="foto" src={foto1}></img></td>
  </tr>
  <tr>
    <td> <img className="foto" src={foto2}></img></td>
    <td><h4>No me olvides</h4>
    <p>
    
    Le escribo a la mar
que nunca me olvides
le pido al destino
que tu siempre me cuides.
    </p>
    </td>
  </tr>
  <tr>
    <td><h4></h4>
    <p>
    

    </p>
    </td>
    <td><img className="foto" src={foto3}></img></td>
  </tr>
</table>
    </div>
   
  );
}

export default Galeria;