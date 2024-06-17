import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//COMPONENTES
import Navegador from './Componentes/Navegador';
import Inicio from './Paginas/Inicio';
import Pie from './Componentes/Pie';
import Productos from './Paginas/Productos';
import Carrito from './Paginas/Carrito';

function App() {
  return (
    <div>
      <Router>
        <Navegador/>
        <div>
          <Routes>
            <Route exact path='/' element={<Inicio />} />
            <Route exact path='/productos' element={<Productos />} />
            <Route exact path='/compra' element={<Carrito />} />
          </Routes>
        </div>
        <Pie/>
      </Router>
    </div>
  );
}

export default App;
