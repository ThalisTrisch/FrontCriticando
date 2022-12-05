import {Navigate} from 'react-router-dom'
import axios from 'axios';

function PrivateRoute({children}){

    async function buscarauth(){
        const result = await axios.get(`http://localhost:3001/autorizarlogin/${localStorage['useremail']}`)
        return result.data
    }
    const autorizado = buscarauth()
    console.log(autorizado)
    return(autorizado ? children : <Navigate to="/" />)
}

export default PrivateRoute;