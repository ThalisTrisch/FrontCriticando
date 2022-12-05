import { useNavigate , Link, useParams } from 'react-router-dom'

function AvisoTeorias(){
    const navigate = useNavigate();
    const {id} = useParams();

    return(
        <div>
            <p>Você quer realmente ir para a sala de teorias? lá há uma grande probabilidade de você receber spoiler</p>
            <button>não perguntar novamente</button>
            <button onClick={() => navigate('/postagem/'+id)}>voltar</button>
            <button onClick={() => navigate('/postagem/teoria/'+id)}>seguir</button>
        </div>
    );
}

export default AvisoTeorias;