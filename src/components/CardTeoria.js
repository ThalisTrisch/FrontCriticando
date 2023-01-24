import { useNavigate , Link } from 'react-router-dom'
import { Global, BlocoUserTeoria, BlocoConteudoTeoria, BlocoAvaliacaoTeoria, Teoria, Coluna, Texto,
    AlternarLados} from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FotoPerfilPostagem from '../images/imagemusuariodefault.png';

function CardTeoria(props){
    const [avaliacao, setAvaliacao] = useState();
    const [aceitacao, setAceitacao] = useState();
    const navigate = useNavigate();

    function aprovar(){
        axios.post('http://localhost:3001/aprovarteoria',{
            email:localStorage['useremail'],
            id: props.id,
            numero: props.numero
        })
        const numaprovadas = aceitacao.aprovada+1;
        setAceitacao((prevAceitacao)=>{
            return({
                ...prevAceitacao,
                aprovada: numaprovadas 
            })
        })
        setAvaliacao(localStorage['useremail'])
    }

    function reprovar(){
        axios.post('http://localhost:3001/reprovarteoria',{
            email:localStorage['useremail'],
            id: props.id,
            numero: props.numero
        })
        const numreprovadas = aceitacao.reprovada+1;
        setAceitacao((prevAceitacao)=>{
            return({
                ...prevAceitacao,
                reprovada: numreprovadas 
            })
        })
        setAvaliacao(localStorage['useremail'])
    }
    
    useEffect(() => {
        axios.get(`http://localhost:3001/getuseravaliacoes/${localStorage['useremail']}/${props.numero}`)
        .then((resultado)=>{
            setAvaliacao(resultado.data)
        })
        
        axios.get(`http://localhost:3001/getaceitacao/${props.numero}`)
        .then((resultado)=>{
            if(resultado.data[0]){
                setAceitacao(resultado.data[0])
            }
        })
    }, [])

    return(
        <center>
            <Global>
                <Teoria>
                    <BlocoUserTeoria>
                        <div>
                            { props.foto == 'imagemusuariodefault.png' ?
                                <img src={FotoPerfilPostagem}></img>: 
                                <img src={props.foto}></img>
                            } 
                            <p>{props.autor}</p>
                        </div>
                        <div>
                            {aceitacao ?
                                <>
                                    <p>Aceitação: {aceitacao.aprovada}</p>
                                    <p>reprovação: {aceitacao.reprovada}</p>
                                </>
                                : <p>Sem Avaliações</p>
                            }
                        </div>
                    </BlocoUserTeoria>
                    <BlocoConteudoTeoria rowSpan={'2'} bgcolor="red">
                        <Coluna></Coluna>
                        <Texto>
                            <AlternarLados>
                                <div>
                                    <h3>{props.titulo}</h3>
                                    <p>{props.conteudo}</p>
                                </div>
                                <div>
                                {typeof avaliacao != "undefined" &&
                                    <>
                                        {avaliacao[0] ?
                                            <>
                                                <button disabled>Aprovar</button>
                                                <button disabled>Reprovar</button>
                                            </>
                                            :
                                            <>
                                                <button onClick={aprovar}>Aprovar</button>
                                                <button onClick={reprovar}>Reprovar</button>
                                            </>
                                        }
                                    </>
                                }
                                </div>
                            </AlternarLados>
                        </Texto>
                    </BlocoConteudoTeoria>
                    {localStorage['useremail'] == props.email &&
                        props.children
                    }
                </Teoria>
            </Global>
        </center>
    );
}

export default CardTeoria;