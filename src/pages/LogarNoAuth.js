import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogarNoAuth(){
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.setItem('logado',true)
        localStorage.setItem('useremail','thalistrisch.gr470@academico.ifsul.edu.br')
        navigate('/principal')
    }, []);

    return(
        <><p>Logado sem Autenticação</p></>
    )
}

export default LogarNoAuth;