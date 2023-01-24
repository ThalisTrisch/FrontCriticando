import { useNavigate , Link, useParams } from 'react-router-dom'
import { Logo, Nav, TelaAviso,CardAviso, Aviso, BtnTeoria , AvisoBody} from './style.js'
import axios from 'axios';

function AvisoTeorias(){
    const navigate = useNavigate();
    const {id} = useParams();

    function salateoria(){
        const input = document.getElementById('marcado')
        if(input.checked){
            axios.post('http://localhost:3001/setperguntarnovamente', {
                email: localStorage['useremail']
            })
        }
        navigate('/postagem/teoria/'+id)
    }

    return(
        <TelaAviso>
            <Nav>
                <Logo>Logo</Logo>
            </Nav>
            <AvisoBody>
                <CardAviso>
                    <Aviso>
                        <p>Você quer realmente ir para a sala de teorias? lá há uma grande probabilidade de você receber spoiler</p>
                    </Aviso>
                    <BtnTeoria>
                        <input id='marcado' type="checkbox" name="perguntaAviso"></input>
                        <label for="perguntaAviso">Não mostrar este aviso novamente</label>
                        <div>
                            <button onClick={() => navigate('/postagem/'+id)}>voltar</button>
                            <button onClick={salateoria}>seguir</button>
                        </div>
                    </BtnTeoria>
                    
                </CardAviso>
            </AvisoBody>
        </TelaAviso>
    );
}

export default AvisoTeorias;