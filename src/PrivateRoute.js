import {Navigate , useNavigate} from 'react-router-dom'
import axios from 'axios';

function PrivateRoute({children}){
    const navigate = useNavigate()
    var resultado = '';
    axios.get(`http://localhost:3001/autorizarlogin/${localStorage['useremail']}`).then((result) => {
        resultado = result.data
    })
    return(true ? children : <Navigate to="/"/> )
}

export default PrivateRoute;