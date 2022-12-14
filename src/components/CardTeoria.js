import { useNavigate , Link } from 'react-router-dom'
import { Global, BlocoUserTeoria, BlocoConteudoTeoria, BlocoAvaliacaoTeoria } from './style';
import { useState } from 'react';

function CardTeoria(props){
    const [avaliacao, setAvaliacao] = useState();
    const navigate = useNavigate();

    return(
        <center>
            <Global>
                <table>
                    <tr>
                        <BlocoUserTeoria bgcolor="blue">
                            <p>{props.autor}</p>
                        </BlocoUserTeoria>
                        <BlocoConteudoTeoria rowSpan={'2'} bgcolor="red">
                            <h3>{props.titulo}</h3>
                            <p>{props.conteudo}</p>
                        </BlocoConteudoTeoria>
                    </tr>
                    <tr>
                        <BlocoAvaliacaoTeoria bgcolor="yellow">
                            <div>
                                <button>Aprovar</button>
                                <button>Reprovar</button>
                            </div>
                            <div>
                                {avaliacao ?
                                    <p>Aceitação: {avaliacao}</p>
                                    : <p>Sem Avaliações</p>
                                }
                            </div>
                        </BlocoAvaliacaoTeoria>
                    </tr>
                </table>
            </Global>
        </center>
    );
}

export default CardTeoria;