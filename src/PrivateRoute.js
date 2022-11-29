import {Navigate} from 'react-router-dom'
import axios from 'axios';

function PrivateRoute({children}){
    const autenticado = localStorage.getItem('logado')
    return(autenticado ? children : <Navigate to="/" />)
}

export default PrivateRoute;