import { useNavigate } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
const client_id = '471779918661-jaop09sfeju5gepogp6lhb2bq7bqjirt.apps.googleusercontent.com';

function Login(){
    const navigate = useNavigate();
    const onSuccess = (res) => {
        console.log("Sucesso no login, ", res.profileObj)
        axios.post('http://localhost:3001/autenticar', {
            email: res.profileObj.email,
            name: res.profileObj.name,
            id: res.profileObj.googleId
        }).then((message) => {
            console.log(message)
        })
        const logado = JSON.stringify(true)
        localStorage.setItem('logado',logado)
        localStorage.setItem('useremail',res.profileObj.email)
        localStorage.setItem('usernome',res.profileObj.name)
        navigate('/principal')
    }
    const onFailure = (res) => {
        console.log("Falha no login")
    }
    
    return(
        <>
            <GoogleLogin
                clientId={client_id}
                buttonText='Login Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </>
    );
}

export default Login;