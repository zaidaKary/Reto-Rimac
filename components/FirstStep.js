import React, { useEffect, useState } from 'react';
import "../styles/sass/home.scss";
import Link from "next/Link";

export default (props) => {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [checked1, setChecked1] = useState('');
  //pasando de hijo a padre
  const handleData=props.handleData;

  useEffect(() => {
    setNombre(localStorage.getItem('nombreUser'));
  }, []);

  useEffect(() => {
    setDni(localStorage.getItem('dniUser'));
  }, []);

  const handleCorreo = (e) => {
    setCorreo(e.target.value);
    console.log(e.target.value);
  };
  const handleChecked1 = (e) => {
    setChecked1(e.target.value);
    console.log(e.target.value);
  };

  const validarCorreo = (valorCorreo) => {
    //Normalmente el formato de un email es: texto.123@texto.texto
    const validandoCorreo =/\w+@[a-z]+\.+[a-z]/; //email lo mas simple
    if(!validandoCorreo.test(valorCorreo)){
     return false;
    } else {
      return true;
  }
};
  return (
  <form>
    <div>
      <h2>
        Hola <strong>{nombre},</strong>
      </h2>
      <h2>
        cuéntanos sobre ti
      </h2>
    </div>
    <p>Podrás protegerlos <strong>por solo S/20 al mes</strong> por asegurado</p>
    <p>Datos del titular</p>
    <div className="form-dni">
      <select disabled>
        <option>DNI</option>
      </select>
  <input placeholder={`${dni}`} readOnly="readonly"></input>
    </div>
  <input value={correo} placeholder="Correo" className="form-dni" onChange={handleCorreo}></input>
    <section>
      <p>
          ¿ESTE SEGURO ES PARA TI?
          <br/>
        <input type="radio" value="no" name='group'  isselected={checked1} onChange={handleChecked1}/>
          No
      </p>
      <p>
        <input type="radio" value="si" name='group'   isselected={checked1} onChange={handleChecked1}/>
          Si
      </p>
      <div className="dni-continuar">
      {/* <p>Modificar DNI</p> */}
      {correo === '' || checked1 === '' || validarCorreo(correo) === false
      ? <button onClick= {() => {
        if (validarCorreo(correo) === false) {
          alert('Por favor, ingresa un correo válido')
        }else if (checked1 === ''){
          alert('Por favor, seleccione una opcion')
        }else {
          alert('Por favor, rellenar los campos solicitados')
        }
        }}>CONTINUAR</button> 
      : <Link href="/twoStep"><button onClick = {() => {
        handleData(correo);
      }}>CONTINUAR</button></Link>}
      </div>
   </section>
  </form>
)
};
