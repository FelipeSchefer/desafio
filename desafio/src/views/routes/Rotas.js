import CardFuncionario from "../card/CardFuncionario";
import Login from "../login/Login";
import CardDetalhes from "../card/CardDetalhes"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from "../home/Home";
import { useState } from "react";


const Rotas = () => {
  const [autenticar, setAutenticar] = useState(false)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login autenticacao={autenticar => setAutenticar(autenticar)}/>}/>
        <Route 
          path="/cards" 
          element={
            autenticar ? <CardFuncionario/> : <Navigate replace to="/" />
          }
        />
        <Route 
          path="/card-detalhes" 
          element={
            autenticar ?  <CardDetalhes/> : <Navigate replace to="/" />
          } 
        />
      </Routes>
    </Router>
  );
}
export default Rotas;
