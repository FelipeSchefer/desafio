import CardFuncionario from "./views/card/CardFuncionario";
import Login from "./views/login/Login";
import CardDetalhes from "./views/card/CardDetalhes"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cards" element={<CardFuncionario/>}/>
        <Route path="/card-detalhes" element={<CardDetalhes/>}/>
      </Routes>
    </Router>
  );
}
export default App;
