import React from "react";
import { withRouter } from "react-router-dom";

export const Gastosecundarios = (Props) => {
  return(
   
<div className="form-group">
      <table className="table table-hover">
        <tbody>
          <tr className="table-dark">
            <th scope="row">ingrese sus gastos familiares</th>
          </tr>
        </tbody>
      </table>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Ingrese Aqui"
        id="inputLarge"
      />

<table className="table table-hover">
  <tbody>
  <tr className="table-dark">
      <th scope="row">Ingresa el valor de las
       eventualidades</th>
     
    </tr>
    </tbody>
</table>
  <input className="form-control form-control-lg" type="text" placeholder="Ingrese Aqui" id="inputLarge"/>
   
    </div>


  );
};
export default withRouter(Gastosecundarios);