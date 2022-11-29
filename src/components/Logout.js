import { useNavigate } from 'react-router-dom';

function Logout(){
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('logado');
        localStorage.removeItem('useremail');
        navigate('/')
    }

    return(
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;