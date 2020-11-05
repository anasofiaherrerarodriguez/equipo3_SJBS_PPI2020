import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'

import Detail from '../components/Detail'
import FormularioIngreso from '../components/FormularioIngreso'
import Registro from '../components/Registro'
import Header from '../components/Header'
import Notificaciones from '../components/Notificaciones'
import Gastosprimarios from '../components/Gastosprimarios'
import Gastosecundarios from '../components/Gastosecundarios'
import Gastosterciarios from '../components/Gastosterciarios'
import Viajes from '../components/Viajes'

export default function Ppicontainer() {
  return (
   <BrowserRouter>
  <Route path="/" exact component={Detail}/>
  <Route path="/FormularioIngreso" exact component={FormularioIngreso}/>
  <Route path="/Registro" exact component={Registro}/>
  <Route path="/Header" exact component={Header}/>
  <Route path="/Notificaciones" exact component={Notificaciones}/>
  <Route path="/Gastosprimarios" exact component={Gastosprimarios}/>
  <Route path="/Gastosecundarios" exact component={Gastosecundarios}/>
  <Route path="/Gastosterciarios" exact component={Gastosterciarios}/>
  <Route path="/Viajes" exact component={Viajes}/>
  </BrowserRouter>
  );
}
