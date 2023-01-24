import {Navigate , useNavigate} from 'react-router-dom'
import axios from 'axios';

function PrivateRoute({children}){
    const navigate = useNavigate()
    return(localStorage['logado'] ? children : <Navigate to="/"/> )
}

export default PrivateRoute;