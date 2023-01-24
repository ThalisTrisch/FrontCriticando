import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { gapi } from 'gapi-script';
import Home from './pages/Home/Home.js';
import Logado from './pages/Principal/Principal.js';
import Explorar from './pages/Principal/Explorar.js';
import PrivateRoute from './PrivateRoute';
import CriarPost from './pages/PagesCriar/CriarPostagem.js';
import Perfil from './pages/Perfil/Perfil.js';
import MeuPerfil from './pages/Perfil/MeuPerfil.js';
import EditarPerfil from './pages/Perfil/EditarPerfil.js';
import Postagem from './pages/Postagem/Postagem.js';
import EditarPostagem from './pages/Postagem/EditarPostagem.js';
import SalaTeorias from './pages/Teorias/SalaTeorias.js';
import CriarTeoria from './pages/PagesCriar/CriarTeoria.js';
import InserirImagens from './pages/PagesCriar/InserirImagens.js';
import AvisoTeorias from './pages/Teorias/AvisoTeorias.js';
import Favoritas from './pages/Postagem/PostagensFavoritas.js';
import Configuracoes from './pages/PagesCriar/Configuracoes.js';
import Informacoes from './pages/PagesCriar/Informacoes.js';
import LogarNoAuth from './pages/LogarNoAuth.js';
import './app.css';

const client_id = '471779918661-jaop09sfeju5gepogp6lhb2bq7bqjirt.apps.googleusercontent.com';

function App() {
  document.title = 'Criticando';
  useEffect(()=>{
    function start(){
      gapi.client.init({
        client_id: client_id,
        scope: ""
      })
    };
    gapi.load('client:auth2',start)
  });
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/logarnoauth' element={<LogarNoAuth/>}/>
        <Route exact path='/principal' element={<PrivateRoute><Logado/></PrivateRoute>}/>
        <Route exact path='/explorar' element={<PrivateRoute><Explorar/></PrivateRoute>}/>
        <Route exact path='/criarpostagem' element={<PrivateRoute><CriarPost/></PrivateRoute>}/>
        <Route exact path='/criarpostagem/inseririmagens/:id' element={<PrivateRoute><InserirImagens/></PrivateRoute>}/>
        <Route exact path='/perfil/:email' element={<PrivateRoute><Perfil/></PrivateRoute>}/>
        <Route exact path='/meuperfil' element={<PrivateRoute><MeuPerfil/></PrivateRoute>}/>
        <Route exact path='/editarperfil' element={<PrivateRoute><EditarPerfil/></PrivateRoute>}/>
        <Route exact path='/postagensfavoritas/:email' element={<PrivateRoute><Favoritas/></PrivateRoute>}/>
        <Route exact path='/postagem/:id' element={<PrivateRoute><Postagem/></PrivateRoute>}/>
        <Route exact path='/editarpostagem/:id' element={<PrivateRoute><EditarPostagem/></PrivateRoute>}/>
        <Route exact path='/aviso/teoria/:id' element={<PrivateRoute><AvisoTeorias/></PrivateRoute>}/>
        <Route exact path='/postagem/teoria/:id' element={<PrivateRoute><SalaTeorias/></PrivateRoute>}/>
        <Route exact path='/postagem/criarteoria/:id' element={<PrivateRoute><CriarTeoria/></PrivateRoute>}/>
        <Route exact path='/configuracoes' element={<PrivateRoute><Configuracoes/></PrivateRoute>}/>
        <Route exact path='/informacoes' element={<PrivateRoute><Informacoes/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;