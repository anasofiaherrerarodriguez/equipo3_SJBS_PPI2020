import React from "react";
import { withRouter } from "react-router-dom";

export const Gastosprimarios = (Props) => {
  return (
    <div className="form-group">
      <table className="table table-hover">
        <tbody>
          <tr className="table-dark">
            <th scope="row">ingresa el valor del Arriendo</th>
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
            <th scope="row">Ingresa tus Servicios</th>
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
            <th scope="row">Ingresa el valor del Mercado</th>
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

export default withRouter(Gastosprimarios);
