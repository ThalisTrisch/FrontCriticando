import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate , useNavigate} from 'react-router-dom';
import { FundoEscuro, Sair,Deletar } from './style.js'
import { BsSearch } from "react-icons/bs";
import logo from '../../images/logofullbranca.png';

function Configuracoes(){
    const [deletar, setDeletar] = useState(false)
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    function mostrardelete(){setDeletar(true)}
    function ocultardelete(){setDeletar(false)}

    function logout(){
        localStorage.removeItem('logado');
        localStorage.removeItem('useremail');
        localStorage.removeItem('userfoto');
        navigate('/')
    }

    function deletarconta(){
        if(email == localStorage['useremail']){
            axios.post(`http://localhost:3001/deletarconta/${localStorage['useremail']}`)
            logout()
        }
    }

    const mudaremail = (e) => {setEmail(e.target.value)}

    return(
        <FundoEscuro>
            <div>
                <h1>Configurações</h1>
                <img src={logo} onClick={() => navigate('/meuperfil')}></img>
                <Sair onClick={logout}>Sair da sessão</Sair>
                {deletar 
                ?<Deletar onClick={ocultardelete}>Cancelar</Deletar>
                :<Deletar onClick={mostrardelete}>Deletar conta</Deletar>
                }
                {deletar &&
                    <div>
                        <p>Para confirmar, digite seu email abaixo</p>
                        <input id='inputemail' onChange={mudaremail} name='email'></input>
                        <Deletar onClick={deletarconta}>Cofirmar</Deletar>
                    </div>
                }
            </div>
        </FundoEscuro>
    )
}

export default Configuracoes;