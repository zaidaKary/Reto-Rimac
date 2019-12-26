import React, { useEffect, useState } from 'react';
import Base from "../components/Base";
import Presentation from "../components/Presentation";
import Login from "../components/Login";
import fetch from "isomorphic-unfetch";

const Home = () => {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');

  const handleData = (dni, nombre) => {
    console.log(dni, nombre);
    setNombre(nombre);
    setDni(dni);
  
  }
  useEffect(() => {
    localStorage.setItem('nombreUser', nombre);
  }, [nombre]);

  useEffect(() => {
    localStorage.setItem('dniUser', dni);
  }, [dni]);

  return (
  <Base children2={<Login handleData={handleData}/>}>
    <Presentation/>
  </Base>
)
};

Home.getInitialProps = async () => {
  const res = await fetch("https://freestyle.getsandbox.com/dummy/obtenerdatospersona", {
    method: "POST",
  });
  const data = await res.json();

  console.log("resultado", data);
  console.log("resultado", data.mensaje);
  return {
    shows: data,
  };
};

export default Home;
