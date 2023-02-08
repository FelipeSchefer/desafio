import Cart from "./components/Cart";
import Login from "./views/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/carts" element={<Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
