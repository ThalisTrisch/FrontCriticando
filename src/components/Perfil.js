import { useNavigate , Link } from 'react-router-dom'

function Perfil(props){
    const navigate = useNavigate();

    return(
            <div>
                <h2>Perfil</h2>
                <p>{props.nome}</p>
            </div>
    );
}

export default Perfil;