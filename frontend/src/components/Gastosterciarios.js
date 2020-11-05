import React from "react";
import { withRouter } from "react-router-dom";

export const Gastosterciarios = (Props) => {
  return (
    <div className="form-group">
      <table className="table table-hover">
        <tbody>
          <tr className="table-dark">
            <th scope="row">Ingresa el valor de sus (fiestas, paseos, cine)</th>
          </tr>
        </tbody>
      </table>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Ingrese Aqui"
        id="inputLarge"
      />
    </div>
  );
};
export default withRouter(Gastosterciarios);
