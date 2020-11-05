import React from "react";
import {withRouter} from 'react-router-dom'
import '../styles/Header.css'

export const Header = (props) => {
  
  return (
     <div> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">Gastos Hormiga</a>
    <div className="Boton">
    <button type="button" class="btn btn-danger">+</button>
    </div>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Notificaciones <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Metas</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">------------------------------------------------------------</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Gastos hormiga</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Cerrar Sesión</a>
        </li>
      </ul>
      </div>
      </nav>

      <div className="Etd">
      <img className='Etd'src='./img/Estadisticas.png' alt='Etd' />
      </div>

      <p align="right">
   <div className="Botonp">
   <button type="button" className="btn btn-outline-secondary">Primaria</button>
    </div>
    </p>

    <p align="right">
<div className="Botonp">
<button type="button" className="btn btn-outline-secondary">Secundaria</button>
    </div>
    </p>

    <p align="right">
<div className="Botonp">
<button type="button" className="btn btn-outline-secondary">Terciaria</button>
    </div>
  
    </p>


  



    </div>

  );
};

export default withRouter(Header);