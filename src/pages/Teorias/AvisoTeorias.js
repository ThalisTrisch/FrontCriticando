import { useNavigate , Link, useParams } from 'react-router-dom'
import { Logo, Nav, TelaAviso,CardAviso, Aviso, BtnTeoria , AvisoBody, Back, Pass} from './style.js'
import axios from 'axios';
import logo from '../../images/logofullbranca.png';

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
                <Logo src={logo}></Logo>
            </Nav>
            <AvisoBody>
                <CardAviso>
                    <Aviso>
                        <p>Você quer realmente ir para a sala de teorias? lá há uma grande probabilidade de você receber spoiler</p>
                    </Aviso>
                    <BtnTeoria>
                        <div>
                            <input id='marcado' type="checkbox" name="perguntaAviso"></input>
                            <p for="perguntaAviso">Não mostrar este aviso novamente</p>
                        </div>
                        <div>
                            <Back onClick={() => navigate('/postagem/'+id)}>voltar</Back>
                            <Pass onClick={salateoria}>seguir</Pass>
                        </div>
                    </BtnTeoria>
                </CardAviso>
            </AvisoBody>
        </TelaAviso>
    );
}

export default AvisoTeorias;