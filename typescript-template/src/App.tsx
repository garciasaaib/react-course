import { TiposBasicos } from "./typescript/TiposBasicos";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { Funciones } from "./typescript/Funciones";
import { Contador } from "./components/Contador";
import { ContadorHook } from "./components/ContadorHook";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import { Formularios } from "./components/Formularios";

export const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS con React</h1>
      <hr></hr>
      <Formularios />
      <Usuarios />
      <TiposBasicos/>
      <ObjetosLiterales/>
      <Funciones />
      <Contador />
      <ContadorHook/>
      <Login/>
    </div>
  )
}

export default App