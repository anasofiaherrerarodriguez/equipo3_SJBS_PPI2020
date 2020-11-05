import React from "react";
import {withRouter} from 'react-router-dom'
import '../styles/Detail.css'

export const Detail= (props) => {
  const { history } = props;
  return (
    <div class="container">
      <h1 className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">CONTROL DE INGRESOS Y GASTOS </h1>
     <center> <img src="./img/florcolores.jpg" width="300px" /></center>
      <button 
      type="button" 
      class="btn btn-lg btn-block btn-outline-primary"
      onClick={() => history.push("/FormularioIngreso")}>
        INICIAR SESIÓN
      </button>
      <button 
      type="button" 
      class="btn btn-lg btn-block btn-outline-primary"
      onClick={() => history.push("/Registro")}
      >
        REGISTRARSE
      </button>
      <h1> CONTROL DE INGRESOS Y GASTOS </h1>
       <h2>Ahorrar no es solo guardar si no saber gastar </h2>
  <div class="card-deck mb-3 text-center">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">ENCONTRATAS</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title"> <small class="text-muted"></small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>diversas fases de ahorros hormigas que son primaria secundaria
             y terciara</li>
         <li>tambien se encontrara una fase de metas</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">contactanos</button>
      </div>
    </div>
    <div class="card mb-7 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">¿Qué  actividades realiza?</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title"> <small class="text-muted"> </small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>La App como tal va a tener una forma de ingresar los gastos que pueden llegar a
tener una persona además permitirá tener accesibilidad por categorías tales
como:
primaria se va a encontrar con
(Arriendo, servicios, Mercado)

 En la secundaria
(eventualidades ( cita médico, mandados, funerarias, entre otras)
(gastos familiares (ropa, compra de electrodoméstico)

 En la terciara
(Óseo y entretenimiento (fiestas, paseos, cine)

metas 
(para que el usuario se proponga a lo que quiere comprase o viajar a alguna
parte del mundo)

</li>
          
 </ul>
  <button type="button" class="btn btn-lg btn-block btn-primary">MAS INFORMACION</button>
 </div>
</div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">DECLARACION DEL PROBLEMA</h4>
      </div>
      <div class="card-body">
 <h1 class="card-title pricing-card-title"><small class="text-muted"></small></h1>
<ul class="list-unstyled mt-3 mb-4">
         
 <li>En la actualidad las personas no saben administrar muy bien su dinero ya que
quieren gastar como ganan, con este proyecto queremos implementar estrategias
para dar una mejor solución a esta problemática, que las personas puedan
administrar mejor su salario y así poder garantizar una mejor economía al poder
separar sus ingresos y gastar solo lo necesario. Y así poder mejorar en su calidad
de vida.

</li>
 </ul>
<button type="button" class="btn btn-lg btn-block btn-primary">CONTACTOS DE LOS DISEÑADORES</button>
 </div>
    </div>
  </div>

  
</div>
  );
};

export default withRouter(Detail);
