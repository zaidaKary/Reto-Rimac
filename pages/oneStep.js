import React, { useEffect, useState } from 'react';
import Base from "../components/Base";
import FirstStep from "../components/FirstStep";

const  pasoUno= () => {
    const [correo, setCorreo] = useState('');
    const handleData = (correo) => {
        console.log(correo);
        setCorreo(correo);
      }
      useEffect(() => {
        localStorage.setItem('correoUser', correo);
      }, [correo]);
    return (
    <Base children2={<FirstStep handleData={handleData}/>}>
    </Base>
    );
};

export default pasoUno;