
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Quiensoy from './paginaweb/Quiensoy';
import Contactos from './paginaweb/Contactos';
import Galeria from './paginaweb/Galeria';
import Inicio from './paginaweb/Inicio';

function App() {
  return (
    
      <Router>
        <div className="App">
          <div>
            <header height="100px">

          <Link to="/" className="uul">Inicio</Link>
          <Link to="/quiensoy" className="uul">QUIEN SOY</Link>
          <Link to="/galeria" className="uul">GALERIA</Link>
          <NavLink to="/contactos" className="uul" activeClassName="active">CONTACTOS</NavLink>
          </header>
         </div>
          <hr />
          <Switch><Route path="/" exact>
            <Inicio/>

          </Route>
         
          <Route path="/Quiensoy">
            <Quiensoy />
          </Route>
          <Route path="/Galeria">
            <Galeria />
          </Route>
          <Route path="/Contactos">
            <Contactos/>
          </Route>
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
