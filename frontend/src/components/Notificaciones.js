import React from "react";
import {withRouter} from 'react-router-dom'

export const Notificaciones = () => {
return(

<div className="card text-white bg-success mb-3" >
  <div className="card-header"></div>
  <div className="card-body">
    <h4 className="card-title"> </h4>
    <p className="card-text"> SE TE MOSTRARA UN CUADRO DE ESTE COLOR EVIDENCIANDO
    CUANTO TE QUEDARA EN TU AHORRO
     </p>
  </div>
  <div className="card text-white bg-primary mb-3" >
    <div className="card-header"></div>
    <div className="card-body">
      <h4 className="card-title"></h4>
      <p className="card-text">SE TE MOSTRARA UN CUADRO DE ESTE COLOR EVIDENCIANDO
    CUANTO GASTASTE DEL AHORRO QUE TENIAS</p>
    </div>
  </div>
  <div className="card text-white bg-danger mb-3" >
  <div className="card-header"></div>
  <div className="card-body">
    <h4 className="card-title">INCORRECTO</h4>
    <p className="card-text">SI INGRESAS MAL LA CONTRASEÑA TIENES 3 INTENTOS 
    SI NO TE FUNCIONA DEBES ESPERAR 20 MIN PARA VOLVER A INGRESAR.</p>
  </div>
</div>
</div>




);
};
export default withRouter(Notificaciones);