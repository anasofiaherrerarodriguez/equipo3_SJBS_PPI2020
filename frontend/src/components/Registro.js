import React from "react";
import { Link, withRouter } from "react-router-dom";



const Registro = (props) => {
const { history } = props;
  return (
    <div>
       <center><img src="./img/florcolores.jpg" width="300px" /></center>
      <div className="container">
        <h2>Form Validation</h2>
        <p>
          In this example, we use <code>.was-validated</code> to indicate what's
          missing before submitting the form:
        </p>
        <form action="/action_page.php" className="was-validated">
          <div className="form-group">
            <label for="uname">Identificación:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter username"
              name="uname"
              required
            />
            <label for="uname">Nombres:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter username"
              name="uname"
              required
            />
            <label for="uname">Apellidos:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter username"
              name="uname"
              required
            />
            <label for="uname">Nombre Usuario:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter username"
              name="uname"
              required
            />
             <label for="pwd">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group">
           
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
                required
              />{" "}
              Acepto los términos.
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Check this checkbox to continue.
              </div>
            </label>
          </div>
          <button 
          type="submit" 
          className="btn btn-primary"
          onClick={() => history.push("/Card")}
          >
            Aceptar
          </button>
          <button
          type="submit" 
          className="btn btn-danger"
          onClick={() => history.goBack("/")}
          >
            Regresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Registro);
