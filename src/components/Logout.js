import { useNavigate } from 'react-router-dom';
import {GoogleLogout} from 'react-google-login';

function Logout(){
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('logado');
        localStorage.removeItem('useremail');
        navigate('/')
    }

    return(
        <>
            <GoogleLogout
                buttonText='Login Google'
                onSuccess={logout}
            />
        </>
    );
}

export default Logout;