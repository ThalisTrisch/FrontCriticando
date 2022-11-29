import { useNavigate , Link } from 'react-router-dom'
import { Imagem, Cardbottom, Pg, Titulo, Global, PgTitulo} from './style';

function CardTeoria(props){
    const navigate = useNavigate();

    return(
        <center>
            <Global>
                <h3>{props.titulo}</h3>
                <p>{props.conteudo}</p>
                <p>{props.autor}</p>
                <p>{props.email}</p>
            </Global>
        </center>
    );
}

export default CardTeoria;