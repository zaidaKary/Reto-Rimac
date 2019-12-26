import React, { useState } from 'react';
import "../styles/sass/home.scss";
import Link from "next/Link";

export default (props) => {
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  //pasando de hijo a padre
  const handleData=props.handleData;
const handleChecked1 = (e) => {
  setChecked1(e.target.checked);
};
const handleChecked2 = (e) => {
  setChecked2(e.target.checked);
};
  const handleDni = (e) => {
    setDni(e.target.value);
    console.log(e.target.value);
  };
  const handleNombre = (e) => {
    setNombre(e.target.value);
    console.log(e.target.value);
  };

  const validarDni = (valorDni) => {
    const validandoDni = /^([0-9])*$/;
    if(!validandoDni.test(valorDni)){
     return false;
    } else {
      return true;
  }
};
  return (
  <form >
    <div>
      <h2>
        Protégelos <strong>ahora</strong>
      </h2>
    </div>
    <p>Ingresa los datos del titular.</p>
    <div className="form-dni">
      <select>
        <option>DNI</option>
      </select>
      <input value={dni} placeholder="Nro. de Documento" onChange={handleDni}></input>
    </div>
    <input value={nombre} placeholder="Nombre" className="form-dni" onChange={handleNombre}></input>
    <section>
      <p>
        <input type="checkbox" checked={checked1} onChange={handleChecked1}/>
        Acepto la <a href="/">Política de Proteccion de Datos Personales </a>y los
        <a>Términos y Condiciones</a>
      </p>
      <p>
        <input type="checkbox" checked={checked2} onChange={handleChecked2}/>
        Acepto la Política de Envio de <br/><a href="/">Comunicaciones Comerciales</a>
      </p>
      {dni === '' || nombre === '' || (dni === '' && nombre === '') || checked1 === false || checked2 === false || (checked1 === false && checked2 === false)
      || validarDni(dni) === false
      ? <button onClick= {() => {
      if(validarDni(dni) === false){
        alert('Por favor, ingresa un número correcto de DNI')
      }else {
        alert('Por favor, rellena todos los campos solicitados y aceptar la política')
      }
       }}>COMENCEMOS</button> 
      : <Link href="/oneStep"><button onClick = {() => {
        handleData(dni, nombre);
      }}>COMENCEMOS</button></Link>}
      
    </section>
  </form>
)
};
