import { useNavigate , Link } from 'react-router-dom'
import { Global, BlocoUserTeoria, BlocoConteudoTeoria, BlocoAvaliacaoTeoria } from './style';
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
            console.log(resultado.data[0])
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
                <table>
                    <tr>
                        <BlocoUserTeoria bgcolor="blue">
                            { props.foto == 'imagemusuariodefault.png' ?
                                <img src={FotoPerfilPostagem}></img>: 
                                <img src={props.foto}></img>
                            } 
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
                                {typeof avaliacao != "undefined" &&
                                    <>
                                        {avaliacao[0]?
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
                            <div>
                                {aceitacao ?
                                    <>
                                        <p>Aceitação: {aceitacao.aprovada}</p>
                                        <p>reprovação: {aceitacao.reprovada}</p>
                                    </>
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