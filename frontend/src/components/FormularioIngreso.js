import React from "react";
import {withRouter} from 'react-router-dom'

export const FormularioIngreso = () => {
  return (
    <div className="container">
       <center><img src="./img/florcolores.jpg" width="300px" /></center>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Nombre de usuario</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Contraseña</label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Olvide mi contraseña
          </label>
        </div>
        <center>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Ingresar.
          </button>
        </center>
      </form>
    </div>
  );
};


export default withRouter(FormularioIngreso);