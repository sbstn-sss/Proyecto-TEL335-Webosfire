import './App.css';
import { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes} from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie'
// functions
import {getTest} from "./functions/test";
import Log from './Components/Log';
import Inicio from './Components/Inicio';
import SignUp from './Components/SignUp';
import Canchas from './Components/Canchas';
import Horario from './Components/Horario';

/*Variale global*/ 


function App() {
  const [cookies, setCookie] = useCookies(['jwt', 'id_usuario', 'email', 'nombre', 'rol', 'tipo_usuario']);
  console.log(cookies);
  return (
    
    <div className="App">


        <Router>
        <header>
        <nav>

          <div style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <div style={{display:'flex', flexDirection: 'column', marginRight: '70px'}}><h1>Gestor canchas USM</h1>
              <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link to="/">Inicio</Link>
                <Link to="/Acerca">Acerca de</Link>
                <Link to="/Acceso">Acceso</Link>
              </div>
            </div>
            <CookiesProvider>
              {cookies.id_usuario ? (
                  <div style={{ display: 'flex', flexDirection: 'row', borderStyle: 'solid', borderColor: '#f7ae00', borderWidth: '2px', padding: '10px', columnGap: '10px', alignItems: 'center' }}>
                      <img style={{ width: '70px', height: '70px' }} src="images/default.jpg" alt="usuario" />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <p style={{ color: '#f7ae00' }}>{cookies.nombre}</p>
                          <p style={{ color: '#f7ae00' }}>{cookies.tipo_usuario}</p>
                      </div>
                      <button style={{ height: '20px', color: '#171717', backgroundColor: '#f7ae00', borderStyle: 'solid', borderWidth: '2px', borderColor: '#f7ae00' }}>Mis Reservas</button>
                  </div>
              ) : null}
            </CookiesProvider>
          </div>
        </nav>
        </header>
        <Routes>
        <Route path = "/" element={<Inicio/>}/>
        <Route path = "/Acceso" element={<Log/>}/>
        <Route path = "/SignUp" element={<SignUp/>}/>
        <Route path = "/Canchas" element={<Canchas/>}/>
        <Route path = "/Canchas/:nombre" element={<Horario/>}/>
        
        </Routes>
    
        </Router>

        

    </div>






  );
}

export default App;
