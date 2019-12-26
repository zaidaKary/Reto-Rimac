import React, { useEffect, useState } from 'react';
import "../styles/sass/home.scss";
import Link from "next/Link";

export default () => {
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    useEffect(() => {
        setNombre(localStorage.getItem('nombreUser'));
      }, []);
      useEffect(() => {
        setDni(localStorage.getItem('dniUser'));
      }, []);
    
    return (
  <form>
    <div>
      <h2>
        Tus <strong>asegurados</strong>
      </h2>
    </div>
    <p>Preséntanos a quién vamos a proteger.</p>
    <div className="add">
    <div>
        <p>
            <strong>{nombre}</strong><br/>
            DNI {dni}-F.N 09/08/2000
        </p>
    </div>
    <div>
        <p>EDITAR</p>
    </div>
    <div>
        <p>ELIMINAR</p>
    </div>
    </div>
    <section className="asegurar-otromas">
      <ul>
          <li>Quiero asegurar a alguien más</li>
      </ul>
      <Link href="/thirdstep"><button>CONTINUAR</button></Link>
   </section>
  </form>
)
};
